// Exercise 34 Pizza
var favoritePizzas = ["Fajita", "Chicken Tikka", "Creamy Chicken"];
console.log("Pizza Names:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nSentences about liking each pizza:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
console.log("\nI really love Fajita pizza!");
