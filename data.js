// What Grows Together dataset — original entries written from general culinary practice.
//
// INGREDIENTS: one per line
//   Name | Category | seasons | taste | techniques | pairings
//   seasons: spring, summer, autumn, winter or year-round
//   pairings: comma separated; "!" marks a classic match. Pairings are merged both ways,
//   so "Apples | ... | cinnamon!" also lists Apples on the Cinnamon card.
//
// CUISINES: Name | signature ingredients (names that match an ingredient become links)

window.INGREDIENTS = `
Almonds | Nut & seed | year-round | sweet, mild | toast, grind, blanch | apricots!, cherries!, chocolate, honey, vanilla, figs, peaches, plums, raspberries, oranges, green beans, trout, saffron, cardamom, rosewater
Anchovies | Fish & seafood | year-round | salty, briny, umami | cure, fry, melt into sauces | garlic!, olive oil!, lemon, capers, parsley, eggs, tomatoes, romaine, lamb, broccoli rabe, bell peppers, black pepper, chiles, Parmesan
Apples | Fruit | autumn | sweet, tart | bake, sauté, poach, raw | cinnamon!, pork!, Cheddar!, butter, caramel, walnuts, pecans, ginger, nutmeg, cranberries, honey, maple syrup, sage, vanilla, celery root, red cabbage, sausage, cloves, allspice, raisins
Apricots | Fruit | summer | sweet, tart | poach, roast, grill, dry | almonds!, vanilla!, honey, pistachios, cardamom, lamb, ginger, cream, yogurt, rosemary, chicken
Artichokes | Vegetable | spring | nutty, vegetal | braise, steam, fry, grill | lemon!, garlic!, olive oil!, parsley, mint, butter, Parmesan, white wine, thyme, fava beans, peas, bacon, prosciutto
Arugula | Vegetable | spring, autumn | peppery, bitter | raw, wilt | Parmesan!, lemon, olive oil, balsamic vinegar, pears, figs, prosciutto, goat cheese, walnuts, beets, tomatoes, steak
Asparagus | Vegetable | spring | grassy, slightly bitter | steam, roast, grill, blanch | butter!, lemon!, eggs!, Parmesan!, peas, mint, tarragon, chervil, salmon, scallops, prosciutto, olive oil, morels, chives, goat cheese, ham, oranges, crab
Avocados | Fruit | year-round | rich, buttery | raw, mash | lime!, cilantro!, chiles, onions, tomatoes, shrimp, crab, eggs, cucumbers, grapefruit, mango, cumin
Bananas | Fruit | year-round | sweet, creamy | bake, sauté, flambé | chocolate!, caramel, cinnamon, vanilla, coconut, pecans, walnuts, honey, peanuts, nutmeg, lime
Barley | Grain & starch | year-round | nutty, chewy | simmer, cook risotto-style | mushrooms!, beef, lamb, thyme, carrots, onions, celery, butter, parsley, dill
Bass | Fish & seafood | summer | mild, sweet | grill, roast, pan-sear | lemon, butter, fennel, olive oil, thyme, tomatoes, capers, white wine, parsley
Striped bass | Fish & seafood | spring, autumn | mild, firm | grill, roast, pan-sear | lemon, butter, fennel, tomatoes, olive oil, clams, basil, corn
Bean sprouts | Vegetable | year-round | fresh, crunchy | stir-fry, raw | soy sauce, ginger, garlic, sesame seeds, chiles, lime, cilantro, shrimp, eggs
Black beans | Grain & starch | year-round | earthy | simmer, purée | cumin!, cilantro, onions, garlic, chiles, lime, pork, white rice, sour cream, avocados, achiote, bell peppers, corn
Fava beans | Vegetable | spring | green, buttery | blanch, purée | mint!, Parmesan, lemon, olive oil, garlic, prosciutto, peas, artichokes, ricotta, lamb, savory, cumin
Green beans | Vegetable | summer | green, grassy | blanch, sauté, steam | almonds!, butter, garlic, shallots, lemon, tomatoes, bacon, savory, dill, mustard
Lima beans | Vegetable | summer | starchy, buttery | simmer, braise | corn!, butter, bacon, ham, cream, thyme, savory, onions
White beans | Grain & starch | year-round | creamy, mild | simmer, braise, purée | sage!, rosemary, garlic, olive oil, tomatoes, sausage, ham, lamb, kale, Parmesan, thyme, bay leaf, tuna
Beef | Meat | year-round | rich, savory | roast, braise, grill | black pepper!, horseradish!, red wine!, mushrooms, onions, rosemary, thyme, garlic, blue cheese, shallots, soy sauce, mustard, bay leaf, carrots, potatoes
Beef heart | Meat | year-round | dense, mineral | grill, braise | garlic, chiles, cumin, red wine, onions, black pepper, oregano
Beef ribs | Meat | autumn, winter | rich, fatty | braise, smoke, grill | red wine!, garlic, molasses, paprika, black pepper, soy sauce, ginger, carrots, onions, star anise
Beet greens | Vegetable | summer, autumn | earthy, mineral | sauté, wilt | garlic, olive oil, lemon, beets, bacon, balsamic vinegar, chiles
Beets | Vegetable | autumn, winter | sweet, earthy | roast, boil, pickle | goat cheese!, oranges!, walnuts, dill, balsamic vinegar, feta, yogurt, horseradish, sour cream, arugula, caraway, mint
Berries | Fruit | summer | sweet, tart | raw, macerate, bake | cream!, vanilla, lemon, mint, mascarpone, honey, yogurt, almonds
Blackberries | Fruit | summer | sweet, tart | raw, bake, jam | apples, lemon, vanilla, cream, almonds, peaches, duck, cinnamon
Blueberries | Fruit | summer | sweet | bake, jam, raw | lemon!, cream, vanilla, cinnamon, peaches, maple syrup, yogurt, lavender, nectarines
Bluefish | Fish & seafood | summer | oily, rich | grill, broil, smoke | lemon!, mustard, tomatoes, onions, bacon, dill, capers
Brains | Meat | year-round | creamy, delicate | poach, fry | butter!, capers, lemon, parsley, black pepper
Broccoli | Vegetable | autumn, winter | green, slightly bitter | steam, roast, stir-fry | garlic!, lemon, Cheddar, Parmesan, chiles, anchovies, olive oil, soy sauce, ginger, almonds
Broccoli rabe | Vegetable | autumn, winter, spring | bitter | blanch, sauté | garlic!, chiles!, sausage!, olive oil, anchovies, Parmesan, pasta, lemon, white beans
Brussels sprouts | Vegetable | autumn, winter | bitter, nutty | roast, braise, shave raw | bacon!, balsamic vinegar, maple syrup, garlic, lemon, Parmesan, pecans, mustard, chestnuts, butter
Buckwheat (kasha) | Grain & starch | year-round | toasty, earthy | toast, simmer | mushrooms!, onions, butter, eggs, egg noodles, sour cream, dill
Bulgur | Grain & starch | year-round | nutty | soak, simmer | parsley!, mint!, lemon, tomatoes, cucumbers, olive oil, lamb, cumin, pomegranate, onions
Cabbage (cooked) | Vegetable | autumn, winter | sweet, mellow | braise, sauté | bacon!, caraway!, butter, onions, apples, sausage, corned beef, juniper berries, mustard, potatoes
Cabbage (raw) | Vegetable | autumn, winter | crisp, peppery | slaw, pickle | lime, cilantro, carrots, sour cream, celery seed, mustard, apples, sesame seeds
Red cabbage | Vegetable | autumn, winter | sweet, earthy | braise, slaw | apples!, red wine, onions, cloves, juniper berries, duck, goose, bacon, caraway, cinnamon
Calves' brains | Meat | year-round | creamy, delicate | poach, fry | butter!, capers!, lemon, parsley, sage
Calf's head | Meat | year-round | gelatinous, rich | poach, braise | mustard, capers, parsley, shallots, tarragon
Calf's liver | Meat | year-round | rich, mineral | sauté | onions!, bacon!, sage, butter, balsamic vinegar, parsley
Capon | Poultry & game | winter | mild, rich | roast | chestnuts!, truffles, butter, thyme, sage, tarragon, cream, mushrooms
Cardoons | Vegetable | winter | artichoke-like, bitter | braise, gratin | anchovies!, garlic, Parmesan, butter, lemon, cream, olive oil
Carrots | Vegetable | year-round | sweet, earthy | roast, glaze, braise, raw | ginger!, butter, honey, cumin, oranges, dill, thyme, parsley, maple syrup, coriander, chervil, tarragon
Catfish | Fish & seafood | year-round | mild, sweet | fry, blacken | cayenne!, corn, paprika, lemon, thyme, garlic, black pepper
Cauliflower | Vegetable | autumn, winter | mild, nutty | roast, purée, gratin | cumin!, turmeric, butter, Parmesan, chiles, lemon, capers, almonds, Cheddar, Gruyère, raisins, saffron
Caviar | Fish & seafood | year-round | salty, briny | serve chilled | crème fraîche!, eggs, chives, potatoes, crêpes, butter, lemon, smoked salmon
Celery | Vegetable | year-round | fresh, slightly bitter | raw, braise | blue cheese, peanuts, apples, walnuts, onions, carrots, lovage, dill
Celery root | Vegetable | autumn, winter | earthy, celery | purée, roast, raw | apples!, mustard!, cream, butter, truffles, potatoes, thyme, walnuts
Crêpes | Sweet | year-round | rich, delicate | pan-cook | butter, lemon, oranges, chocolate, strawberries, ham, Gruyère, mushrooms, bananas
Chanterelles | Vegetable | summer, autumn | fruity, peppery | sauté | butter!, shallots!, thyme, cream, eggs, chicken, veal, corn, garlic, parsley
Chard | Vegetable | summer, autumn | earthy | sauté, braise | garlic!, olive oil, lemon, raisins, pine nuts, Parmesan, eggs, nutmeg, chiles
Cherries | Fruit | summer | sweet, tart | raw, bake, poach | chocolate!, almonds!, vanilla, duck, cream, goat cheese, pistachios, cinnamon
Chestnuts | Nut & seed | autumn, winter | sweet, starchy | roast, purée | Brussels sprouts, turkey, chocolate, cream, vanilla, sage, mushrooms, pork, celery root, honey
Chickpeas | Grain & starch | year-round | nutty, creamy | simmer, purée, fry | garlic!, lemon!, cumin, olive oil, sesame seeds, paprika, cilantro, parsley, spinach, chiles, lamb, coriander
Chicken | Poultry & game | year-round | mild, savory | roast, braise, grill, sauté | lemon!, garlic!, thyme!, tarragon!, rosemary, mushrooms, sage, mustard, leeks, cream, ginger, soy sauce, paprika, white wine, olives, saffron, chiles
Chicken livers | Poultry & game | year-round | rich, mineral | sauté, pâté | onions!, butter, sage, bacon, thyme, apples, balsamic vinegar, capers
Chicory | Vegetable | winter | bitter | raw, braise | oranges, walnuts, blue cheese, bacon, mustard, anchovies, pears
Chocolate | Sweet | year-round | bitter, sweet | melt, bake, temper | hazelnuts!, raspberries!, coffee!, oranges, cherries, chiles, mint, vanilla, almonds, cinnamon, bananas, caramel, peanuts, pears, cardamom
White chocolate | Sweet | year-round | sweet, creamy | melt, bake | raspberries!, lemon, coconut, passion fruit, pistachios, strawberries, cardamom
Clams | Fish & seafood | year-round | briny, sweet | steam, fry, chowder | garlic!, white wine!, parsley, butter, pasta, bacon, potatoes, cream, chiles, sausage
Coconut | Pantry | year-round | sweet, rich | toast, simmer as milk | lime!, chiles, cilantro, shrimp, ginger, lemongrass, mango, pineapple, chocolate, bananas, turmeric
Cod | Fish & seafood | winter | mild, flaky | roast, poach, fry | lemon, butter, potatoes, parsley, capers, leeks, sausage, tomatoes, olive oil
Coffee | Pantry | year-round | bitter, roasted | brew, infuse | chocolate!, cream, vanilla, cardamom, cinnamon, caramel, hazelnuts, mascarpone
Corn | Vegetable | summer | sweet, milky | grill, boil, sauté | butter!, chiles!, lime!, cilantro, bacon, cream, basil, tomatoes, zucchini, feta, shrimp, scallops, lobster, crab
Corned beef | Meat | winter | salty, spiced | braise | cabbage (cooked)!, mustard!, potatoes, carrots, sauerkraut, Gruyère, caraway
Crab | Fish & seafood | year-round | sweet, delicate | steam, boil, sauté | butter!, lemon!, avocados, paprika, chives, tarragon, corn, grapefruit, ginger, cilantro, cayenne
Soft-shell crab | Fish & seafood | spring | sweet, crisp | sauté, fry | butter!, lemon, capers, almonds, garlic, parsley, chiles
Cranberries | Fruit | autumn, winter | tart, astringent | simmer, bake, dry | oranges!, apples, pecans, maple syrup, ginger, turkey, cinnamon, walnuts
Crayfish | Fish & seafood | spring | sweet, briny | boil, étouffée | cayenne!, butter, garlic, corn, potatoes, dill, celery, bell peppers, onions
Cucumbers | Vegetable | summer | cool, watery | raw, pickle | dill!, yogurt!, mint, lime, chiles, onions, salmon, sour cream, feta, tomatoes
Currants | Fruit | summer | tart | raw, jam, dry | game, duck, lamb, venison, cream, pine nuts, raspberries
Custard | Sweet | year-round | rich, sweet | bake, stir | vanilla!, nutmeg, caramel, berries, lemon, cinnamon, coffee
Dandelion greens | Vegetable | spring | bitter | raw, wilt | bacon!, eggs, garlic, lemon, olive oil, anchovies, mustard
Dates | Fruit | autumn, winter | very sweet | raw, stuff, bake | bacon!, almonds, walnuts, cinnamon, oranges, goat cheese, lamb, yogurt, cardamom
Duck | Poultry & game | autumn, winter | rich, fatty | roast, confit, sear | oranges!, cherries!, ginger, soy sauce, honey, star anise, figs, lentils, plums, thyme, juniper berries
Eel | Fish & seafood | autumn | rich, oily | grill, smoke, braise | soy sauce!, ginger, sesame seeds, white rice, wasabi, red wine
Eggplant | Vegetable | summer | earthy, slightly bitter | roast, fry, grill | garlic!, olive oil!, lamb!, tomatoes!, basil, mint, feta, soy sauce, chiles, cumin, Parmesan, yogurt, sesame seeds
Eggs | Dairy & egg | spring | rich, mild | poach, scramble, bake | chives!, bacon!, butter, Parmesan, tarragon, asparagus, mushrooms, ham, Gruyère, truffles, spinach, smoked salmon, chervil
Endive | Vegetable | winter | bitter, crisp | raw, braise | blue cheese!, walnuts!, pears, oranges, ham, Gruyère, butter, lemon
Escarole | Vegetable | autumn, winter | bitter | wilt, soup | white beans!, garlic, olive oil, lemon, anchovies, Parmesan, sausage
Fennel | Vegetable | autumn, winter | anise, sweet | braise, roast, shave raw | oranges!, olive oil, Parmesan, pork, salmon, lemon, apples, dill, sausage, sardines, bass, blood oranges
Fiddlehead ferns | Vegetable | spring | grassy, asparagus-like | blanch, sauté | butter!, lemon, garlic, shallots, morels, bacon
Figs | Fruit | summer, autumn | honeyed, jammy | raw, roast, grill | prosciutto!, goat cheese!, honey, walnuts, almonds, balsamic vinegar, blue cheese, mascarpone, thyme, duck
Fish | Fish & seafood | year-round | varies | grill, roast, poach | lemon!, butter, parsley, dill, capers, olive oil, white wine, garlic, fennel
Smoked fish | Fish & seafood | year-round | smoky, salty | serve cold, flake | horseradish!, dill, sour cream, potatoes, lemon, crème fraîche, capers, eggs
Flounder | Fish & seafood | year-round | delicate, sweet | sauté, bake | lemon!, butter!, parsley, capers, almonds, white wine
Foie gras | Poultry & game | year-round | rich, buttery | sear, terrine | figs!, apples, pears, honey, cherries, truffles, quince, black pepper
Frogs' legs | Poultry & game | spring | delicate, mild | sauté, fry | garlic!, butter!, parsley, lemon, white wine
Game | Poultry & game | autumn, winter | rich, gamey | roast, braise | juniper berries!, red wine, currants, mushrooms, thyme, bay leaf, chestnuts, black pepper
Goose | Poultry & game | winter | rich, fatty | roast | red cabbage!, apples, prunes, chestnuts, sage, oranges, juniper berries
Grapefruit | Fruit | winter | bitter, tart | raw, broil | avocados!, crab, shrimp, mint, honey, fennel
Grapes | Fruit | summer, autumn | sweet | raw, roast | blue cheese, walnuts, chicken, sausage, rosemary, almonds
Greens | Vegetable | autumn, winter | bitter, earthy | braise, sauté | garlic!, bacon, ham, chiles, lemon, olive oil, onions
Grouper | Fish & seafood | year-round | mild, firm | grill, blacken | lime, chiles, mango, butter, garlic, cilantro
Guava | Fruit | winter | floral, sweet | raw, paste | lime, cream, chiles, coconut, goat cheese
Guinea hen | Poultry & game | autumn | gamey, like chicken | roast | thyme, mushrooms, bacon, cabbage (cooked), lentils, garlic, tarragon
Haddock | Fish & seafood | year-round | mild | fry, smoke, poach | lemon, butter, potatoes, cream, parsley, leeks, dill
Halibut | Fish & seafood | spring, summer | mild, meaty | roast, poach, sear | lemon!, butter!, fennel, leeks, peas, tomatoes, capers, chervil, olive oil
Ham | Meat | year-round | salty, sweet | bake, glaze | mustard!, maple syrup, cloves, pineapple, Gruyère, peas, eggs, honey, apples, melon
Hamburger | Meat | summer | savory | grill, griddle | Cheddar!, onions, bacon, tomatoes, mustard, lettuce, cucumbers, blue cheese, mushrooms
Hare | Poultry & game | autumn, winter | rich, gamey | braise | red wine!, juniper berries, chocolate, bacon, thyme, egg noodles, prunes
Hearts of palm | Vegetable | year-round | mild, crisp | raw | lime, avocados, tomatoes, shrimp, cilantro
Herring | Fish & seafood | year-round | oily, rich | pickle, smoke | sour cream!, dill!, onions, potatoes, apples, mustard, beets
Honeydew | Fruit | summer | sweet, floral | raw | prosciutto!, mint, lime, ginger, cucumbers
Ices | Sweet | summer | refreshing | freeze | lemon, lime, raspberries, mint, mango, grapefruit, passion fruit
Ice cream | Sweet | year-round | creamy, sweet | churn | vanilla!, chocolate, caramel, coffee, strawberries, bananas, pistachios, hazelnuts
Jerusalem artichokes | Vegetable | autumn, winter | nutty, sweet | roast, purée | butter, thyme, cream, hazelnuts, lemon, bacon, truffles
Jicama | Vegetable | year-round | crisp, sweet | raw | lime!, chiles!, cilantro, mango, oranges, cucumbers
John Dory | Fish & seafood | year-round | sweet, firm | sauté, roast | butter, lemon, capers, fennel, tomatoes, olive oil
Kale | Vegetable | winter | bitter, earthy | sauté, braise, massage raw | garlic!, lemon!, olive oil, Parmesan, chiles, bacon, feta, white beans, sausage
Kidneys | Meat | year-round | strong, mineral | grill, sauté | mustard!, butter, shallots, red wine, parsley, bacon
Kiwi | Fruit | winter | tart, sweet | raw | strawberries, lime, mango, bananas, cream, pineapple
Kohlrabi | Vegetable | spring, autumn | sweet, crisp | raw, roast | butter, dill, apples, lemon, cream, caraway
Kumquats | Fruit | winter | tart, bitter peel | candy, raw | duck, honey, ginger, chocolate, cinnamon, pork
Lamb | Meat | spring | rich, gamey | roast, grill, braise | rosemary!, garlic!, mint!, cumin, yogurt, eggplant, feta, lemon, cinnamon, oregano, anchovies, white beans, coriander, apricots
Lamb chops | Meat | spring | rich, tender | grill, sear | rosemary!, garlic, mint, mustard, thyme, lemon, black pepper
Lamb shanks | Meat | winter | rich, gelatinous | braise | red wine!, garlic, rosemary, tomatoes, white beans, onions, carrots, cinnamon, polenta
Lamb's liver | Meat | year-round | mineral, rich | sauté | onions, bacon, sage, butter, parsley
Lamb's tongue | Meat | year-round | tender, rich | braise, poach | mustard, capers, parsley, garlic, lemon
Leeks | Vegetable | autumn, winter | sweet, mild onion | braise, sweat, soup | potatoes!, butter!, cream, thyme, chicken, mustard, eggs, Parmesan, Gruyère
Lemon | Fruit | winter | sour, bright | zest, juice, preserve | capers!, garlic, butter, thyme, chicken, salmon, honey, parsley, olive oil, blueberries, vanilla, ginger
Lentils | Grain & starch | year-round | earthy | simmer | cumin!, onions, carrots, garlic, bacon, sausage, thyme, bay leaf, spinach, lemon, yogurt, duck
Lettuce | Vegetable | spring, summer | fresh, mild | raw | olive oil, lemon, mustard, chives, shallots
Lime | Fruit | year-round | sour, aromatic | zest, juice | chiles!, cilantro!, ginger, coconut, shrimp
Lychee | Fruit | summer | floral, sweet | raw | coconut, ginger, lime, raspberries, rosewater
Lobster | Fish & seafood | summer | sweet, rich | boil, steam, grill | butter!, lemon, tarragon, corn, vanilla, cream, chives, potatoes
Mâche | Vegetable | winter | mild, nutty | raw | beets, walnuts, hazelnuts, goat cheese, eggs, mustard
Mackerel | Fish & seafood | autumn | oily, rich | grill, cure | mustard, horseradish, lemon, rhubarb, cucumbers, soy sauce, ginger
Mahi-mahi | Fish & seafood | year-round | mild, firm | grill | lime!, mango, pineapple, chiles, cilantro, coconut
Mango | Fruit | summer | sweet, tropical | raw, purée | lime!, chiles!, coconut, cilantro, ginger, shrimp, mint, passion fruit, white rice
Marrow | Meat | year-round | rich, fatty | roast | parsley!, shallots, capers, lemon, red wine
Mascarpone | Dairy & egg | year-round | creamy, sweet | whip, fold | coffee!, figs, berries, honey, chocolate, lemon
Melon | Fruit | summer | sweet | raw | prosciutto!, mint, lime, black pepper, honey, basil
Monkfish | Fish & seafood | winter | sweet, like lobster | roast, braise | bacon, saffron, tomatoes, garlic, red wine, butter
Morels | Vegetable | spring | earthy, smoky | sauté | butter!, cream!, asparagus, shallots, chicken, eggs, peas, veal
Mushrooms | Vegetable | autumn | earthy, umami | sauté, roast | thyme!, garlic!, butter!, cream, Parmesan, shallots, soy sauce, eggs, beef, chicken, rosemary, parsley
Mussels | Fish & seafood | autumn, winter | briny, sweet | steam | white wine!, garlic, shallots, parsley, saffron, cream, tomatoes, coconut, lemongrass
Mutton | Meat | winter | strong, gamey | braise, stew | garlic, rosemary, cumin, capers, onions, potatoes
Nectarines | Fruit | summer | sweet, tart | raw, grill | vanilla, almonds, honey, basil, raspberries, cream
Egg noodles | Grain & starch | year-round | rich, tender | boil | butter!, poppy seeds, sour cream, mushrooms, beef, paprika, chicken
Octopus | Fish & seafood | year-round | tender, sweet | braise then grill | olive oil!, paprika!, lemon, potatoes, oregano, garlic
Okra | Vegetable | summer | grassy | fry, stew | tomatoes!, onions, cayenne, cumin, garlic, shrimp, corn
Onions | Vegetable | year-round | pungent, sweet when cooked | caramelize, roast, raw | garlic, thyme, butter, beef, bacon, balsamic vinegar, Gruyère
Oranges | Fruit | winter | sweet, tart | raw, zest | chocolate!, duck!, cranberries, ginger, cinnamon, olive oil, carrots, fennel, beets, almonds
Blood oranges | Fruit | winter | sweet, berry-like | raw, segment | fennel!, olive oil, avocados, mint, chocolate, scallops
Oxtail | Meat | winter | rich, gelatinous | braise | red wine!, carrots, onions, thyme, bay leaf, star anise, tomatoes
Oysters | Fish & seafood | autumn, winter | briny | raw, fry, roast | lemon!, shallots, black pepper, horseradish, butter, spinach, cream, bacon
Papaya | Fruit | year-round | sweet, musky | raw | lime!, chiles, mint, shrimp, coconut
Parsnips | Vegetable | autumn, winter | sweet, nutty | roast, purée | butter, honey, maple syrup, nutmeg, thyme, cream, apples, ginger
Partridge | Poultry & game | autumn | gamey | roast | cabbage (cooked)!, bacon, juniper berries, thyme, grapes, chestnuts
Passion fruit | Fruit | summer | tart, tropical | raw, purée | mango, coconut, white chocolate, cream, lime
Pasta | Grain & starch | year-round | neutral | boil | Parmesan!, garlic, olive oil, tomatoes, basil, butter, black pepper, clams
Pea pods | Vegetable | spring | sweet, crisp | stir-fry, blanch | ginger, garlic, soy sauce, mint, butter
Peaches | Fruit | summer | sweet, juicy | raw, grill, bake | vanilla!, cream, basil, ginger, almonds, honey, prosciutto, mint, mozzarella, raspberries, blueberries
Pears | Fruit | autumn, winter | sweet, floral | poach, bake, raw | blue cheese!, walnuts!, ginger, vanilla, honey, cinnamon, chocolate, almonds, goat cheese, prosciutto, red wine, cardamom
Peas | Vegetable | spring | sweet, green | blanch, purée | mint!, butter!, bacon, prosciutto, lemon, cream, Parmesan, scallops, shallots, tarragon, lamb, ham
Pecans | Nut & seed | autumn | sweet, buttery | toast, candy | maple syrup!, sweet potatoes, pumpkin, apples, caramel, chocolate
Bell peppers | Vegetable | summer | sweet, vegetal | roast, stuff, raw | garlic, olive oil, anchovies, onions, tomatoes, paprika, sausage, eggs, capers, basil
Persimmons | Fruit | autumn | honeyed | raw, bake | pomegranate, cinnamon, cream, walnuts, arugula, goat cheese
Pheasant | Poultry & game | autumn, winter | gamey, lean | roast | bacon!, apples, cabbage (cooked), juniper berries, thyme, cream, chestnuts
Pig's ears | Meat | year-round | crunchy, gelatinous | braise then fry | chiles, lime, mustard, garlic, cilantro
Pig's feet | Meat | year-round | gelatinous | braise | mustard, lentils, onions, parsley
Pike | Fish & seafood | winter | mild | poach, quenelles | butter, cream, lemon, white wine, shallots
Pineapple | Fruit | year-round | sweet, acidic | raw, grill | coconut!, ham, chiles, lime, mint, ginger, pork, vanilla
Plantains | Fruit | year-round | starchy, sweet when ripe | fry, bake | black beans, lime, garlic, sour cream, cinnamon
Plums | Fruit | summer | tart, sweet | roast, bake | cinnamon!, almonds, duck, pork, ginger, star anise, vanilla
Polenta | Grain & starch | year-round | creamy, corn | simmer, grill | Parmesan!, butter!, mushrooms, sausage, tomatoes, blue cheese, rosemary
Pomegranate | Fruit | autumn, winter | tart, juicy | raw, juice | lamb!, walnuts, mint, yogurt, chicken, eggplant
Pompano | Fish & seafood | spring | rich, sweet | grill, broil | lemon, butter, lime, parsley
Porcini | Vegetable | autumn | meaty, nutty | sauté, grill, dry | Parmesan!, garlic, olive oil, thyme, polenta, risotto, beef, parsley
Pork | Meat | year-round | sweet, rich | roast, braise, grill | apples!, sage!, fennel, mustard, maple syrup, ginger, garlic, chiles, soy sauce, prunes, cumin, oranges
Pork chops | Meat | year-round | mild, juicy | grill, sear | apples!, sage, mustard, garlic, rosemary, fennel seed
Potatoes | Vegetable | year-round | starchy, mild | roast, mash, fry | butter!, rosemary!, cream, garlic, chives, bacon, Parmesan, dill, onions, eggs, olive oil, Cheddar, leeks
Prosciutto | Meat | year-round | salty, sweet | raw, crisp | melon!, figs!, peaches, pears, asparagus, Parmesan, arugula
Prunes | Fruit | year-round | rich, sweet | stew, soak | pork, rabbit, almonds, oranges, cinnamon, bacon
Pumpkin | Vegetable | autumn | sweet, earthy | roast, purée | cinnamon!, nutmeg!, ginger, maple syrup, cream, sage, pecans, butter, vanilla, cloves
Quail | Poultry & game | autumn | delicate, gamey | grill, roast | grapes, bacon, figs, honey, thyme, sage
Quince | Fruit | autumn | floral, tart | poach, paste | honey, vanilla, cinnamon, lamb, pork, apples, cardamom
Rabbit | Poultry & game | autumn | mild, lean | braise, roast | mustard!, prunes, white wine, thyme, rosemary, bacon, olives
Radicchio | Vegetable | autumn, winter | bitter | grill, raw | balsamic vinegar!, blue cheese, oranges, walnuts, bacon, Parmesan, honey
Radishes | Vegetable | spring | peppery, crisp | raw, roast | butter!, chives, mint, cucumbers
Raspberries | Fruit | summer | tart, sweet | raw, purée | chocolate, cream, almonds, lemon, peaches, white chocolate, rosewater, mint
Red snapper | Fish & seafood | year-round | sweet, firm | grill, roast | lime, chiles, garlic, tomatoes, cilantro, olives
Rhubarb | Fruit | spring | very tart | stew, bake | strawberries!, ginger, oranges, vanilla, cream, honey, almonds, cardamom
White rice | Grain & starch | year-round | neutral | steam, boil | coconut, soy sauce, ginger, black beans, saffron, butter
Wild rice | Grain & starch | autumn | nutty, chewy | simmer | mushrooms!, pecans, cranberries, butter, thyme, onions
Ricotta | Dairy & egg | year-round | milky, sweet | whip, bake | lemon!, honey, spinach, pasta, black pepper, figs, basil
Risotto | Grain & starch | year-round | creamy | stir | Parmesan!, butter!, saffron, mushrooms, asparagus, peas, white wine
Romaine | Vegetable | year-round | crisp, sweet | raw, grill | anchovies!, Parmesan!, lemon, garlic, eggs, black pepper
Rutabaga | Vegetable | autumn, winter | sweet, peppery | mash, roast | butter, nutmeg, black pepper, potatoes, cream
Salmon | Fish & seafood | spring, summer | rich, oily | grill, roast, poach, cure | dill!, lemon!, cucumbers, fennel, ginger, soy sauce, asparagus, mustard, sorrel, horseradish
Smoked salmon | Fish & seafood | year-round | smoky, silky | serve cold | crème fraîche!, dill, capers, chives, eggs, lemon, potatoes, cucumbers
Salmon trout | Fish & seafood | spring | delicate | sauté, roast | butter, lemon, almonds, dill
Salsify | Vegetable | winter | nutty, like oyster | braise, fry | butter, cream, parsley, lemon
Salt cod | Fish & seafood | winter | salty | soak, purée, fry | potatoes!, garlic!, olive oil, cream, tomatoes, parsley
Sardines | Fish & seafood | summer | oily | grill, preserve | lemon!, olive oil, fennel, garlic, parsley, tomatoes, pine nuts, raisins
Sauerkraut | Vegetable | autumn, winter | sour | braise | sausage!, pork, caraway, juniper berries, apples, potatoes, corned beef
Sausage | Meat | year-round | savory, fatty | grill, sear, braise | mustard!, fennel seed, sauerkraut, apples, onions, bell peppers, white beans, lentils
Scallops | Fish & seafood | autumn, winter | sweet, delicate | sear | butter!, bacon, lemon, peas, corn, asparagus, vanilla, cauliflower
Sea bass | Fish & seafood | year-round | mild, buttery | roast, sear | lemon, ginger, soy sauce, fennel, olive oil, tomatoes, butter
Seafood | Fish & seafood | year-round | briny, sweet | grill, stew | garlic, saffron, tomatoes, lemon, white wine, parsley, chiles
Sea urchin | Fish & seafood | winter | briny, creamy | raw | lemon, butter, pasta, white rice, soy sauce
Shad | Fish & seafood | spring | rich | broil, bake | butter, lemon, bacon, sorrel
Shad roe | Fish & seafood | spring | rich, delicate | sauté | butter!, bacon!, lemon, capers
Shellfish | Fish & seafood | year-round | sweet, briny | steam, grill | garlic, butter, lemon, white wine, saffron
Shiitakes | Vegetable | year-round | meaty, smoky | sauté, roast | soy sauce!, ginger, garlic, sesame seeds, butter
Shrimp | Fish & seafood | year-round | sweet, briny | grill, sauté, boil | garlic!, lime, chiles, butter, cilantro, avocados, coconut, cayenne, tomatoes
Skate | Fish & seafood | year-round | sweet, delicate | sauté | butter!, capers!, lemon, parsley
Snails | Meat | year-round | earthy, tender | bake | butter!, garlic!, parsley!, shallots
Snap peas | Vegetable | spring | sweet, crisp | blanch, sauté | mint, butter, lemon, sesame seeds
Snapper | Fish & seafood | year-round | mild, sweet | grill, steam | ginger, lime, garlic, chiles, cilantro
Sole | Fish & seafood | year-round | delicate | sauté | butter!, lemon!, parsley, capers
Dover sole | Fish & seafood | year-round | delicate, firm | sauté, grill | butter!, lemon, parsley, chervil
Sorrel | Herb | spring | sour, lemony | wilt, purée | salmon!, cream, eggs, potatoes, shad
Sweet soufflés | Sweet | year-round | light, airy | bake | chocolate, vanilla, lemon, raspberries, oranges
Spaetzle | Grain & starch | year-round | tender, eggy | boil, pan-fry | butter, Gruyère, onions, nutmeg, venison
Spareribs | Meat | summer | rich, fatty | smoke, braise, grill | paprika, molasses, garlic, soy sauce, ginger, black pepper, mustard
Spinach | Vegetable | spring, autumn | mineral | wilt, raw | garlic, nutmeg, cream, eggs, feta, lemon, butter, Parmesan, ricotta
Squab | Poultry & game | year-round | rich, dark | roast, sear | cherries, peas, foie gras, mushrooms, red wine, thyme
Acorn squash | Vegetable | autumn, winter | sweet, nutty | roast | maple syrup!, butter, cinnamon, sage, pecans
Butternut squash | Vegetable | autumn, winter | sweet, nutty | roast, purée, soup | sage!, butter!, maple syrup, nutmeg, cinnamon, Parmesan, goat cheese, pecans, apples, bacon, ginger, thyme
Spaghetti squash | Vegetable | autumn | mild | roast | Parmesan, butter, tomatoes, garlic, basil
Summer squash | Vegetable | summer | mild | sauté, grill | basil, garlic, olive oil, Parmesan, tomatoes, mint
Winter squash | Vegetable | autumn, winter | sweet | roast, purée | sage!, butter, maple syrup, cinnamon, nutmeg, Parmesan
Squash blossoms | Vegetable | summer | delicate, floral | stuff, fry | ricotta!, mozzarella, basil, anchovies, zucchini
Squid | Fish & seafood | year-round | sweet, tender | fry, grill | lemon!, garlic, chiles, parsley, olive oil, tomatoes
Steak | Meat | year-round | rich, beefy | grill, sear | black pepper!, garlic, blue cheese, butter, shallots, red wine, rosemary, mushrooms, potatoes
Strawberries | Fruit | spring, summer | sweet, tart | raw, macerate | rhubarb!, cream!, balsamic vinegar, basil, mint, chocolate, vanilla, lemon, black pepper
Stuffing | Grain & starch | autumn | savory, herbal | bake | sage!, celery, onions, thyme, sausage, chestnuts, cranberries, apples
Sturgeon | Fish & seafood | year-round | meaty, firm | smoke, roast | butter, lemon, dill, potatoes, caviar
Suckling pig | Meat | year-round | tender, rich | roast | garlic, oranges, oregano, rosemary, apples
Sweet potatoes | Vegetable | autumn, winter | sweet, starchy | roast, bake, mash | maple syrup!, cinnamon, butter, chiles, lime, pecans, ginger, bacon, sage, cumin
Sweetbreads | Meat | year-round | creamy, mild | sear, braise | butter!, capers, lemon, mushrooms, morels, peas
Swiss chard | Vegetable | summer, autumn | earthy, beet-like | sauté | garlic!, olive oil, raisins, pine nuts, lemon, Parmesan
Swordfish | Fish & seafood | summer | meaty | grill | lemon!, olive oil, capers, oregano, tomatoes, olives
Tomatoes | Vegetable | summer | sweet, acidic | raw, roast, simmer | basil!, garlic!, olive oil!, mozzarella!, oregano, onions, balsamic vinegar, cucumbers, feta, bacon, Parmesan, chiles, thyme, corn, eggplant, zucchini, avocados, cilantro
Tongue | Meat | year-round | tender, rich | braise | mustard!, horseradish, capers, parsley, onions
Tripe | Meat | year-round | chewy, mild | braise | tomatoes!, onions, garlic, Parmesan, mint, chiles
Trout | Fish & seafood | spring, summer | delicate | pan-fry, grill | almonds!, butter!, lemon, bacon, dill, capers
Smoked trout | Fish & seafood | year-round | smoky | serve cold | horseradish!, cream, dill, apples, potatoes, watercress
Truffles | Vegetable | winter | earthy, musky | shave, infuse | eggs!, potatoes!, butter, pasta, risotto, cream, Parmesan
Black truffles | Vegetable | winter | earthy, deep | shave, slice | eggs, potatoes, foie gras, butter, chicken
White truffles | Vegetable | autumn | garlicky, musky | shave raw | eggs!, pasta!, risotto, butter, Parmesan
Tuna | Fish & seafood | summer | meaty, rich | sear, raw, grill | soy sauce!, ginger, sesame seeds, wasabi, olive oil, capers, white beans, lemon
Turbot | Fish & seafood | year-round | sweet, firm | roast, poach | butter, leeks, cream, chervil, lemon
Turkey | Poultry & game | autumn, winter | mild | roast | sage!, cranberries!, stuffing, chestnuts, thyme, butter
Turnips | Vegetable | autumn, winter | peppery, sweet | roast, braise, glaze | butter, duck, honey, thyme, cream
Veal | Meat | year-round | delicate | sauté, braise | lemon!, sage!, prosciutto, mushrooms, capers, white wine, cream, tarragon
Veal chops | Meat | year-round | tender | grill, sear | sage, rosemary, lemon, mushrooms, butter
Veal kidneys | Meat | year-round | mild, mineral | sauté | mustard!, shallots, cream, butter
Veal shanks | Meat | winter | rich, gelatinous | braise | lemon!, parsley!, garlic, white wine, tomatoes, carrots, saffron, risotto
Veal sweetbreads | Meat | year-round | creamy | sear | butter!, morels, capers, lemon
Venison | Poultry & game | autumn, winter | lean, gamey | roast, sear | juniper berries!, red wine, black pepper, currants, chestnuts, mushrooms, blackberries, rosemary
Walnuts | Nut & seed | autumn | bitter, rich | toast | pears, blue cheese, beets, apples, maple syrup, honey, endive
Watercress | Vegetable | spring | peppery | raw | oranges, beets, smoked trout, eggs, lemon, potatoes
Yams | Vegetable | autumn, winter | sweet, starchy | roast, mash | butter, cinnamon, maple syrup, ginger, nutmeg
Yogurt | Dairy & egg | year-round | tangy | strain, marinate | cucumbers, mint, dill, lamb, honey, garlic, cumin
Zucchini | Vegetable | summer | mild, grassy | grill, sauté, raw | garlic!, olive oil!, basil, lemon, mint, Parmesan, feta, thyme, eggplant
Achiote | Spice | year-round | earthy, peppery | paste, infuse | pork!, oranges!, garlic, cumin, chicken, oregano
Allspice | Spice | year-round | warm, clove-like | ground, whole | cinnamon, nutmeg, cloves, pork, chiles, beef, apples
Aniseed | Spice | year-round | licorice | toast, bake | figs, almonds, oranges, pears, pork
Basil | Herb | summer | sweet, peppery | raw, pesto | tomatoes!, pine nuts!, garlic, mozzarella, olive oil, Parmesan, lemon, strawberries, peaches
Bay leaf | Herb | year-round | woodsy | simmer | white beans, beef, tomatoes, thyme, lentils
Fermented black beans | Pantry | year-round | salty, pungent | mash into sauces | garlic!, ginger, chiles, clams, fish, pork
Capers | Pantry | year-round | salty, briny | whole, fried | lemon!, parsley, salmon, cauliflower, olive oil, tomatoes, butter
Caraway | Spice | year-round | anise, earthy | toast, bake | cabbage (cooked), sauerkraut, pork, potatoes, sausage
Cardamom | Spice | year-round | floral, citrusy | ground, whole | coffee!, oranges, pears, almonds, chocolate, saffron, rosewater
Cassia | Spice | year-round | warm, sweet | stick, ground | star anise, pork, duck, apples, cloves
Cayenne | Spice | year-round | hot | ground | chocolate, shrimp, paprika, lime, corn
Celery seed | Spice | year-round | savory, bitter | ground, whole | cabbage (raw), potatoes, tomatoes, eggs
Chervil | Herb | spring | delicate anise | raw, to finish | eggs!, carrots, chives, tarragon, parsley, fish, peas
Chiles | Spice | year-round | hot, fruity | fresh, dried, roasted | lime!, garlic, cilantro, chocolate, corn, pork, shrimp, mango, cumin, tomatoes
Chives | Herb | spring | mild onion | raw, to finish | eggs!, potatoes, cream, salmon, sour cream
Cilantro | Herb | year-round | bright, citrusy | raw | lime!, chiles!, avocados, cumin, coconut, shrimp, ginger, mango
Cinnamon | Spice | autumn, winter | warm, sweet | stick, ground | apples!, pumpkin!, chocolate, vanilla, nutmeg, ginger, oranges, lamb, coffee
Cinnamon basil | Herb | summer | spicy, sweet | raw | peaches, plums, tomatoes, coconut
Cloves | Spice | autumn, winter | pungent, sweet | whole, ground | ham!, oranges, cinnamon, apples, red cabbage, pumpkin
Coriander | Spice | year-round | citrusy, floral | toast, grind | cumin!, carrots, lamb, chickpeas, oranges, pork
Cumin | Spice | year-round | earthy, warm | toast, grind | lamb, cilantro, chiles, lime, carrots, yogurt, black beans, cauliflower
Dill | Herb | spring, summer | fresh, anise | raw | salmon!, cucumbers!, yogurt, potatoes, lemon, eggs, beets
Fennel seed | Spice | year-round | sweet anise | toast | pork!, sausage!, tomatoes, fish, oranges
Fenugreek | Spice | year-round | bitter, maple-like | toast | potatoes, spinach, lentils, chicken, cumin
Garlic | Vegetable | year-round | pungent | roast, sauté, raw | olive oil!, parsley!, butter, lemon, chiles, rosemary, thyme, basil, shrimp, chicken, lamb
Ginger | Spice | year-round | hot, sweet | grate, candy | soy sauce!, garlic!, lime, carrots, pears, honey, salmon, pork
Horseradish | Spice | year-round | hot, sharp | grate | beef!, beets, smoked fish, sour cream, oysters, apples
Juniper berries | Spice | autumn, winter | piney | crush | venison!, sauerkraut, game, red cabbage, duck, pork
Lavender | Herb | summer | floral | dry, infuse | honey!, lemon, blueberries, lamb, vanilla
Lemongrass | Herb | year-round | lemony, floral | bruise, infuse | coconut!, ginger, chiles, lime, chicken, shrimp
Lemon thyme | Herb | summer | lemony, herbal | raw, roast | chicken, fish, lemon, honey
Lemon verbena | Herb | summer | lemony, sweet | infuse | berries, cream, peaches, vanilla
Lovage | Herb | spring, summer | celery-like | raw, soup | potatoes, tomatoes, eggs, celery
Maple syrup | Pantry | year-round | sweet, smoky | drizzle, glaze | bacon!, pecans!, sweet potatoes, apples, butternut squash, walnuts
Marjoram | Herb | summer | sweet, like oregano | raw | tomatoes, eggs, mushrooms, chicken, lamb, zucchini
Mint | Herb | spring, summer | cool, sweet | raw | lamb!, peas!, cucumbers, yogurt, feta, chocolate, lime
Molasses | Pantry | year-round | bittersweet | bake, glaze | ginger!, cinnamon, pork, cloves, black pepper
Mustard | Pantry | year-round | sharp, hot | condiment, seed | pork, chicken, tarragon, honey, Brussels sprouts, leeks, sausage
Nutmeg | Spice | autumn, winter | warm, nutty | grate | cream, pumpkin, potatoes, cinnamon, spinach, custard
Oregano | Herb | summer | pungent, earthy | dry, raw | tomatoes, feta, olive oil, lemon, lamb
Paprika | Spice | year-round | sweet, smoky | ground | chicken!, potatoes, octopus, sausage, eggs
Parsley | Herb | year-round | fresh, grassy | raw | garlic, lemon, capers, olive oil, potatoes
Peanuts | Nut & seed | year-round | rich, roasted | roast, grind | chiles, lime, chocolate, chicken, soy sauce, cilantro
Black pepper | Spice | year-round | pungent, hot | crack, grind | beef!, strawberries, Parmesan, eggs
Pistachios | Nut & seed | year-round | sweet, green | toast | rosewater!, cardamom, honey, apricots, chocolate, lamb, figs
Pomegranate molasses | Pantry | year-round | tart, fruity | glaze | lamb!, walnuts, eggplant, chicken
Poppy seeds | Nut & seed | year-round | nutty | toast, bake | lemon!, egg noodles, butter, honey
Rosemary | Herb | year-round | piney, resinous | roast | lamb!, potatoes, garlic, olive oil, chicken, beef, lemon
Rosewater | Pantry | year-round | floral | infuse | pistachios!, cardamom, raspberries, honey, almonds
Saffron | Spice | year-round | floral, honeyed | steep | risotto!, seafood!, white rice, mussels, chicken, cardamom, almonds
Sage | Herb | autumn, winter | earthy, musky | fry, roast | butter!, butternut squash!, pork!, apples, chicken
Savory | Herb | summer | peppery, like thyme | raw, simmer | green beans!, white beans, lima beans
Sesame seeds | Nut & seed | year-round | nutty | toast | soy sauce!, ginger, honey, spinach, tuna, chickpeas
Sour cream | Dairy & egg | year-round | tangy, rich | dollop | potatoes!, chives, dill, paprika
Star anise | Spice | year-round | licorice, warm | whole | beef!, duck, pork, oranges, cinnamon
Sumac | Spice | year-round | tart, lemony | sprinkle | lamb, onions, chicken, tomatoes, yogurt
Tamarind | Pantry | year-round | sour, sweet | paste | chiles, shrimp, peanuts, coconut, lime
Tarragon | Herb | spring, summer | anise, sweet | raw, infuse | chicken!, eggs!, mustard, shallots, butter, salmon
Thyme | Herb | year-round | earthy, woodsy | roast, simmer | chicken!, mushrooms, garlic, lemon, potatoes, beef, honey
Turmeric | Spice | year-round | earthy, bitter | ground | cauliflower, coconut, ginger, lentils, white rice
Vanilla | Spice | year-round | sweet, floral | split, steep | cream!, chocolate, strawberries, peaches, pears, apples, rhubarb
Balsamic vinegar | Pantry | year-round | sweet, acidic | drizzle, reduce | strawberries, tomatoes, Brussels sprouts, beets
Wasabi | Spice | year-round | sharp, hot | grate | tuna!, soy sauce, salmon, avocados
Butter | Dairy & egg | year-round | rich | brown, emulsify | sage, lemon, garlic, scallops, shrimp, mushrooms, potatoes
Cream | Dairy & egg | year-round | rich, sweet | whip, reduce | strawberries, vanilla, mushrooms, peas, nutmeg
Crème fraîche | Dairy & egg | year-round | tangy, rich | dollop | caviar, smoked salmon, potatoes, berries
Parmesan | Dairy & egg | year-round | salty, umami | grate, shave | basil, tomatoes, mushrooms, asparagus, eggs, black pepper
Mozzarella | Dairy & egg | summer | milky, mild | raw, melt | tomatoes!, basil!, peaches, olive oil
Goat cheese | Dairy & egg | spring | tangy | raw, warm | beets!, honey, walnuts, cherries, asparagus
Feta | Dairy & egg | summer | salty, tangy | crumble | oregano!, tomatoes, cucumbers, mint, olive oil, lamb
Blue cheese | Dairy & egg | autumn, winter | pungent, salty | crumble | pears!, walnuts!, honey, beef
Cheddar | Dairy & egg | year-round | sharp | melt | apples!, potatoes, bacon
Gruyère | Dairy & egg | year-round | nutty | melt | onions!, ham, potatoes, eggs
Olive oil | Pantry | year-round | fruity, peppery | drizzle, fry | garlic, tomatoes, lemon, basil
Olives | Pantry | year-round | salty, bitter | raw, braise | oranges, lemon, rosemary, chicken, feta
Soy sauce | Pantry | year-round | salty, umami | season, glaze | ginger, garlic, mushrooms, duck
Honey | Pantry | year-round | sweet, floral | drizzle | goat cheese, blue cheese, pears, mustard, lemon
Caramel | Sweet | year-round | buttery, bittersweet | cook sugar | apples, bananas, pecans, vanilla
Raisins | Fruit | year-round | sweet | plump | pine nuts!, cinnamon, apples
Pine nuts | Nut & seed | year-round | buttery | toast | basil, raisins, spinach
Hazelnuts | Nut & seed | autumn | sweet, toasty | toast | chocolate!, pears, butter, coffee
Shallots | Vegetable | year-round | sweet, mild onion | sweat | butter, thyme, tarragon, beef, scallops
Bacon | Meat | year-round | salty, smoky | crisp, render | eggs!, maple syrup, Brussels sprouts, peas, potatoes, scallops, tomatoes
Red wine | Pantry | year-round | tannic, fruity | braise, reduce | beef, mushrooms, shallots
White wine | Pantry | year-round | acidic | deglaze, steam | mussels, clams, chicken, shallots
`;

window.CUISINES = `
African | chiles, peanuts, plantains, okra, ginger, tomatoes, coriander, cumin
Argentinean | beef, chimichurri, parsley, garlic, oregano, chiles, red wine
Armenian | lamb, bulgur, apricots, yogurt, mint, walnuts, pomegranate
Australian | lamb, beef, seafood, macadamia, lemon myrtle, passion fruit
Austrian | veal, pork, paprika, caraway, sauerkraut, apples, poppy seeds, spaetzle
Brazilian | black beans, beef, coconut, lime, cassava, chiles, cilantro
Cajun | cayenne, bell peppers, onions, celery, crayfish, sausage, okra, garlic, thyme
Canadian | maple syrup, salmon, wild rice, blueberries, potatoes, Cheddar
Cantonese | ginger, soy sauce, fermented black beans, oyster sauce, shiitakes, seafood, star anise
Caribbean | allspice, chiles, lime, coconut, thyme, plantains, mango, black beans
Chilean | seafood, corn, chiles, cilantro, avocados, red wine
Chinese | soy sauce, ginger, garlic, star anise, sesame seeds, chiles, white rice, pork
Colombian | plantains, corn, avocados, cilantro, black beans, coconut
Corsican | chestnuts, olive oil, wild herbs, sheep's cheese, honey, pork
Creole | tomatoes, cayenne, bell peppers, shrimp, okra, thyme, bay leaf, white rice
Danish | herring, pork, dill, caraway, rye, butter, apples
Dutch | Gruyère, potatoes, cabbage (cooked), herring, nutmeg, sausage
East Indian | turmeric, cardamom, coconut, cumin, coriander, chiles, tamarind
English | beef, mustard, horseradish, mint, potatoes, peas, Cheddar
European | butter, cream, garlic, olive oil, thyme, onions
Finnish | dill, rye, salmon, berries, potatoes, mushrooms
French | butter, shallots, tarragon, thyme, white wine, cream, chervil, mustard
German | pork, sausage, sauerkraut, caraway, mustard, juniper berries, potatoes, apples
Greek | olive oil, lemon, oregano, feta, lamb, yogurt, mint, olives
Hungarian | paprika!, sour cream, onions, caraway, bell peppers, beef
Indian | cumin, coriander, turmeric, cardamom, ginger, garlic, chiles, yogurt, lentils
Indonesian | coconut, peanuts, chiles, lemongrass, tamarind, soy sauce, ginger
Iranian | saffron, rosewater, pomegranate, pistachios, sumac, lamb, white rice, mint
Irish | potatoes, cabbage (cooked), lamb, butter, oysters, corned beef
Italian | olive oil, garlic, basil, tomatoes, Parmesan, pasta, prosciutto, oregano
Jamaican | allspice, chiles, thyme, ginger, coconut, lime
Japanese | soy sauce, ginger, sesame seeds, wasabi, white rice, tuna, shiitakes, miso
Jordanian | lamb, yogurt, sumac, olive oil, chickpeas, cardamom
Korean | chiles, garlic, ginger, sesame seeds, soy sauce, cabbage (raw), beef
Latin American | chiles, lime, cilantro, corn, black beans, avocados, cumin
Lebanese | lemon, garlic, parsley, mint, bulgur, chickpeas, sumac, olive oil
Malaysian | coconut, lemongrass, chiles, tamarind, peanuts, shrimp
Mediterranean | olive oil, garlic, tomatoes, lemon, oregano, olives, capers, seafood
Mexican | chiles, lime, cilantro, corn, cumin, black beans, avocados, chocolate, achiote
Middle Eastern | cumin, coriander, sumac, mint, parsley, lemon, yogurt, pomegranate molasses
Moroccan | cumin, cinnamon, saffron, ginger, preserved lemon, olives, dates, almonds, lamb
North African | cumin, coriander, chiles, mint, lamb, chickpeas, dates
Norwegian | salmon, dill, herring, potatoes, lingonberries, butter
Pakistani | cumin, coriander, chiles, yogurt, lamb, lentils, cardamom
Peruvian | chiles, lime, potatoes, corn, cilantro, seafood
Philippine | soy sauce, garlic, vinegar, pork, coconut, mango
Polish | sausage, sauerkraut, dill, sour cream, beets, mushrooms, poppy seeds
Portuguese | salt cod, olive oil, garlic, paprika, sausage, clams, piri-piri
Puerto Rican | achiote, cilantro, plantains, pork, garlic, oregano
Romanian | polenta, sour cream, pork, dill, garlic
Russian | dill, sour cream, beets, cabbage (cooked), caviar, buckwheat (kasha), mushrooms
Scandinavian | dill, herring, salmon, rye, caraway, cardamom, lingonberries
Scottish | salmon, oats, lamb, potatoes, rutabaga, game
Singaporean | chiles, coconut, crab, lime, lemongrass, soy sauce
South American | corn, chiles, potatoes, beef, avocados, black beans
South Seas | coconut, pineapple, fish, lime, mango, taro
Southeast Asian | lemongrass, chiles, lime, coconut, cilantro, fish sauce, peanuts
Southwestern United States | chiles, cumin, corn, black beans, beef, lime, cilantro
Spanish | olive oil, paprika, saffron, garlic, sausage, almonds, seafood, salt cod
Sri Lankan | coconut, cinnamon, chiles, curry leaves, cardamom, seafood
Swedish | dill, herring, cardamom, lingonberries, potatoes, salmon
Swiss | Gruyère, potatoes, chocolate, cream, nutmeg
Szechwan | Sichuan pepper, chiles, garlic, ginger, fermented black beans, pork
Thai | lemongrass, lime, chiles, coconut, cilantro, fish sauce, peanuts, basil
Tunisian | harissa, chiles, cumin, caraway, olive oil, lemon, tuna
Turkish | yogurt, lamb, eggplant, pistachios, sumac, mint, pomegranate molasses
Ukrainian | beets, dill, sour cream, cabbage (cooked), potatoes, garlic
Venezuelan | corn, black beans, plantains, beef, cilantro
Vietnamese | lime, cilantro, mint, chiles, fish sauce, lemongrass, peanuts, white rice
`;
