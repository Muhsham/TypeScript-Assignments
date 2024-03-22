//Exercise 35 Animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print animal names
console.log("Animal Names:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print statements about each animal
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i].toLowerCase(), " would make a great pet."));
}
// Additional sentence stating common characteristic
console.log("\nAny of these animals would make a great pet!");
