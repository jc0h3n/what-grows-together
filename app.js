const SEASONS = ["spring", "summer", "autumn", "winter"];
const CATS = ["All", "Vegetable", "Fruit", "Herb", "Spice", "Meat", "Poultry & game", "Fish & seafood",
  "Dairy & egg", "Grain & starch", "Nut & seed", "Pantry", "Sweet"];

const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const cap = s => s[0].toUpperCase() + s.slice(1);
const rows = txt => txt.trim().split("\n").filter(l => l.trim() && !l.trim().startsWith("#"))
  .map(l => l.split("|").map(s => s.trim()));
const $ = id => document.getElementById(id);

// ---- Build the data graph -------------------------------------------------
const ING = {};
const ingRows = rows(window.INGREDIENTS);
for (const [name, cat, seasons, taste, techniques] of ingRows) {
  ING[slug(name)] = { id: slug(name), name, cat, taste, techniques,
    seasons: seasons.split(",").map(s => s.trim()), pairs: new Map(), cuisines: [] };
}
const unknown = new Set();
for (const [name, , , , , pairs = ""] of ingRows) {
  const a = ING[slug(name)];
  for (let p of pairs.split(",")) {
    p = p.trim(); if (!p) continue;
    const strong = p.endsWith("!");
    const b = ING[slug(strong ? p.slice(0, -1) : p)];
    if (!b) { unknown.add(p); continue; }
    if (b === a) continue;
    const s = strong ? 2 : 1;
    a.pairs.set(b.id, Math.max(s, a.pairs.get(b.id) || 0));
    b.pairs.set(a.id, Math.max(s, b.pairs.get(a.id) || 0));
  }
}
if (unknown.size) console.warn("Pairings with no matching ingredient:", [...unknown].join(", "));

const CUI = {};
for (const [name, list = ""] of rows(window.CUISINES)) {
  const id = "cuisine-" + slug(name);
  const items = list.split(",").map(s => s.trim().replace(/!$/, "")).filter(Boolean);
  CUI[id] = { id, name, items };
  for (const it of items) if (ING[slug(it)]) ING[slug(it)].cuisines.push(id);
}

const ALL = Object.values(ING).sort((x, y) => x.name.localeCompare(y.name));
const ALL_CUI = Object.values(CUI).sort((x, y) => x.name.localeCompare(y.name));

// ---- State ----------------------------------------------------------------
const store = {
  get(k, d) { try { const v = localStorage.getItem("fa:" + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem("fa:" + k, JSON.stringify(v)); } catch {} }
};
const valid = id => ING[id] || CUI[id];
const fromHash = location.hash.slice(1);
const state = {
  current: valid(fromHash) ? fromHash : store.get("current", "butternut-squash"),
  season: store.get("season", "all"),
  mode: "ingredients",
  cat: "All",
  q: "",
  plate: store.get("plate", []).filter(id => ING[id])
};
if (!valid(state.current)) state.current = "tomatoes";
if (CUI[state.current]) state.mode = "cuisines";

const yearRound = i => i.seasons.includes("year-round");
const inSeason = (i, s = state.season) => s === "all" || yearRound(i) || i.seasons.includes(s);
const seasonText = i => yearRound(i) ? "year-round" : i.seasons.join(", ");

// Small HTML helpers
const btn = (label, attrs, on) => `<button class="link${on ? " on" : ""}" ${attrs}>${label}</button>`;
const slashes = parts => parts.join(' <span class="sep">/</span> ');
const commas = parts => parts.join(", ");
function ingLink(i, classic) {
  const off = !inSeason(i);
  const cls = ["link", classic && "classic", off && "off"].filter(Boolean).join(" ");
  return `<button class="${cls}" data-go="${i.id}" title="${off ? "Out of season in " + state.season : esc(i.taste)}">${esc(i.name)}</button>`;
}

// ---- Rendering ------------------------------------------------------------
function renderControls() {
  $("modeNav").innerHTML = slashes([
    btn("Ingredients", 'data-mode="ingredients"', state.mode === "ingredients"),
    btn("Cuisines", 'data-mode="cuisines"', state.mode === "cuisines")
  ]);
  $("seasonNav").innerHTML = slashes(["all", ...SEASONS].map(s =>
    btn(s === "all" ? "Any" : cap(s), `data-season="${s}"`, state.season === s)));
  $("catRow").hidden = state.mode !== "ingredients";
  $("cats").innerHTML = slashes(CATS.map(c => btn(esc(c), `data-cat="${esc(c)}"`, state.cat === c)));
  $("q").placeholder = state.mode === "cuisines" ? "Search cuisines or flavors…" : "Search ingredients…";
}

function filtered() {
  const q = state.q.trim().toLowerCase();
  if (state.mode === "cuisines")
    return ALL_CUI.filter(c => !q || c.name.toLowerCase().includes(q) || c.items.some(i => i.toLowerCase().includes(q)));
  return ALL.filter(i => inSeason(i) && (state.cat === "All" || i.cat === state.cat) &&
    (!q || i.name.toLowerCase().includes(q)));
}

function renderList() {
  const items = filtered();
  const groups = new Map();
  for (const it of items) {
    const L = it.name[0].toUpperCase();
    if (!groups.has(L)) groups.set(L, []);
    groups.get(L).push(btn(esc(it.name), `data-go="${it.id}"`, it.id === state.current));
  }
  $("indexTitle").textContent = state.mode === "cuisines" ? "All cuisines" : "All ingredients";
  $("list").innerHTML = [...groups].map(([L, links]) => `<p class="letter"><b>${L}</b> ${commas(links)}</p>`).join("") ||
    `<p class="muted">Nothing matches. Try another search${state.mode === "ingredients" ? ", category or season" : ""}.</p>`;
  $("count").textContent = `Showing ${items.length} of ${state.mode === "cuisines" ? ALL_CUI.length + " cuisines" : ALL.length + " ingredients"}.`;
}

function renderIngredient(i) {
  const pairs = [...i.pairs].map(([id, s]) => ({ i: ING[id], s }))
    .sort((a, b) => (b.s - a.s) || (inSeason(b.i) - inSeason(a.i)) || a.i.name.localeCompare(b.i.name));
  const onPlate = state.plate.includes(i.id);
  const rowsHtml = [
    ["Season", seasonText(i)],
    ["Taste", esc(i.taste)],
    i.techniques && ["Techniques", esc(i.techniques)],
    i.cuisines.length && ["Common in", commas(i.cuisines.map(id => btn(esc(CUI[id].name), `data-go="${id}"`)))]
  ].filter(Boolean).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  return `
    <div class="entry-head">
      <h2>${esc(i.name)}</h2>
      ${btn(onPlate ? "remove from plate" : "+ add to plate", `data-plate="${i.id}"`)}
    </div>
    <p class="muted">${esc(i.cat)}</p>
    <dl>${rowsHtml}</dl>
    <h3>Pairs with</h3>
    ${pairs.length ? `<p class="pairs">${commas(pairs.map(p => ingLink(p.i, p.s === 2)))}</p>`
      : `<p class="muted">No pairings yet. Add some in data.js.</p>`}
    ${state.season !== "all" ? `<p class="muted">Grayed-out pairings are out of season in ${state.season}.</p>` : ""}`;
}

function renderCuisine(c) {
  const links = c.items.map(name => {
    const i = ING[slug(name)];
    return i ? ingLink(i, false) : `<span class="plain">${esc(name)}</span>`;
  });
  return `
    <h2>${esc(c.name)}</h2>
    <p class="muted">Cuisine</p>
    <h3>Signature flavors</h3>
    <p class="pairs">${commas(links)}</p>
    <p class="muted">Gray names aren't in the ingredient index yet.</p>`;
}

function renderCard() {
  $("card").innerHTML = CUI[state.current] ? renderCuisine(CUI[state.current]) : renderIngredient(ING[state.current]);
}

function renderPlate() {
  const plate = state.plate.map(id => ING[id]);
  if (!plate.length) {
    $("plate").innerHTML = `<h3>Your plate</h3><p class="muted">Add two or three ingredients to your plate to see what goes with all of them.</p>`;
    return;
  }
  const matches = ALL.filter(c => !state.plate.includes(c.id) && plate.every(p => p.pairs.has(c.id)))
    .map(c => ({ c, score: plate.reduce((t, p) => t + p.pairs.get(c.id), 0) }))
    .sort((a, b) => b.score - a.score || (inSeason(b.c) - inSeason(a.c)) || a.c.name.localeCompare(b.c.name));
  const items = plate.map(p => `${btn(esc(p.name), `data-go="${p.id}"`)} ${btn("×", `data-plate="${p.id}" aria-label="Remove ${esc(p.name)}"`)}`);
  $("plate").innerHTML = `
    <h3>Your plate</h3>
    <p>${commas(items)} <span class="muted">·</span> ${btn("clear", "data-clear")}</p>
    ${plate.length < 2 ? `<p class="muted">Add another ingredient to narrow it down.</p>` :
      matches.length ? `<p class="pairs"><span class="muted">Goes with all of them:</span> ${commas(matches.map(m => ingLink(m.c, m.score === plate.length * 2)))}</p>`
      : `<p class="muted">Nothing in the index pairs with all of these. Try removing one.</p>`}`;
}

function render() { renderControls(); renderList(); renderPlate(); renderCard(); }

function go(id, scroll) {
  if (!valid(id)) return;
  state.current = id; store.set("current", id);
  const mode = CUI[id] ? "cuisines" : "ingredients";
  if (mode !== state.mode) { state.mode = mode; state.q = ""; $("q").value = ""; renderControls(); }
  if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
  renderList(); renderCard();
  if (scroll) {
    const top = $("card").getBoundingClientRect().top;
    if (top < 0 || top > innerHeight * 0.6) $("card").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function togglePlate(id) {
  state.plate = state.plate.includes(id) ? state.plate.filter(x => x !== id) : [...state.plate, id];
  store.set("plate", state.plate); renderPlate(); renderCard();
}

document.addEventListener("click", e => {
  const t = e.target.closest("button, #home"); if (!t) return;
  const d = t.dataset;
  if (t.id === "home") { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); }
  else if (d.go) go(d.go, true);
  else if (d.mode) { state.mode = d.mode; state.q = ""; $("q").value = ""; renderControls(); renderList(); }
  else if (d.season) { state.season = d.season; store.set("season", state.season); render(); }
  else if (d.cat) { state.cat = d.cat; renderControls(); renderList(); }
  else if (d.plate) togglePlate(d.plate);
  else if ("clear" in d) { state.plate = []; store.set("plate", []); renderPlate(); renderCard(); }
});
$("q").addEventListener("input", () => { state.q = $("q").value; renderList(); });
$("q").addEventListener("keydown", e => { if (e.key === "Enter") { const f = filtered()[0]; if (f) go(f.id, true); } });
addEventListener("hashchange", () => go(location.hash.slice(1)));

render();
