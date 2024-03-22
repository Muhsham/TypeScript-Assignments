//Exercise 44 Sandwiches
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log("--------------------------------------------");
}
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly");
