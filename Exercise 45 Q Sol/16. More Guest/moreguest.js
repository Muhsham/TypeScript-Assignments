//Exercise 14, 15 & 16
var guest_list = ["Ahsan", "Shoaib", "Talha", "Arsalan"];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Respected Sir ` + guest_list [i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
// }
var not_present = "Talha";
var new_guest = "Waseem";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir " + guest_list[i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
}
guest_list.unshift('Afridi', 'Gul', 'Razzaq');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir' + guest_list[i] + ',\n We got a bigger table and we are Inviting 03 more guests on Tommorrow.\nThank You\n');
}
