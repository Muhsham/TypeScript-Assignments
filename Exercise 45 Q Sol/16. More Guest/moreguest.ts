//Exercise 14, 15 & 16
let guest_list : string [] = [`Ahsan`, `Shoaib`, `Talha`, `Arsalan`];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Respected Sir ` + guest_list [i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
// }
let not_present :string = `Talha`;
let new_guest : string = `Waseem`;
guest_list[2] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir ` + guest_list [i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
}
guest_list.unshift('Afridi','Gul','Razzaq');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir' + guest_list [i] + ',\n We got a bigger table and we are Inviting 03 more guests on Tommorrow.\nThank You\n');
}
