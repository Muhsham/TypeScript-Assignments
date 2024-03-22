//Exercise 44 Sandwiches

function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log("--------------------------------------------");
}

make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly");
