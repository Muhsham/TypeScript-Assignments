//Exercise 42 Great Magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

const great_magicians = make_great(magician_names);

show_magicians(great_magicians);
