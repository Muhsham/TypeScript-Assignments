// Exercise 43 Unchanged Magicians
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var original_magicians = magician_names.slice();
var great_magicians = make_great(original_magicians);
show_magicians(magician_names);
show_magicians(great_magicians);
