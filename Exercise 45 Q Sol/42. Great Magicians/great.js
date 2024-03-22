//Exercise 42 Great Magicians
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
