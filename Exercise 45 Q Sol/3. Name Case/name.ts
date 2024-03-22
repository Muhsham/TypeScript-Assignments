// lower case
let personName: string ="Haseeb";
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//Title Case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
