// Exercise 43 Unchanged Magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

const original_magicians = magician_names.slice();

const great_magicians = make_great(original_magicians);

show_magicians(magician_names);

show_magicians(great_magicians);
