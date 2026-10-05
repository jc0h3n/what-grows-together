# What Grows Together

A small static web app for looking up flavor pairings: what an ingredient goes with, when it's in season, how it's usually cooked, and which cuisines lean on it.

- **Ingredient cards** with classic and good pairings, season, taste and techniques
- **Season filter** that hides out-of-season ingredients and fades out-of-season pairings
- **Your plate**: add a few ingredients to find everything that pairs with all of them
- **Cuisines**: signature flavors for 69 regional cuisines

No build step. Open `index.html` in a browser, or serve the folder with GitHub Pages.

## Editing the data

Everything lives in `data.js`, one ingredient per line:

```
Name | Category | seasons | taste | techniques | pairings
```

Mark a classic match with `!` (for example `basil!`). Pairings link both ways automatically, so you only need to list a pair once.
