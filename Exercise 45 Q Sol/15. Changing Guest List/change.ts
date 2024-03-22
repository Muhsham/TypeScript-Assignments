//Exercise 14 & 15
let guest_list : string [] = [`Ahsan`, `Shoaib`, `Talha`, `Arsalan`];
for (let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir ` + guest_list [i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
}
let not_present :string = `Talha`;
let new_guest : string = `Waseem`;
guest_list[2] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir ` + guest_list [i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
}
console.log(`Mr. ${not_present} will not coming tommorrow dinner, `);