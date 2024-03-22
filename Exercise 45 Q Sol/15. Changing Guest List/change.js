//Exercise 14 & 15
var guest_list = ["Ahsan", "Shoaib", "Talha", "Arsalan"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir " + guest_list[i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
}
var not_present = "Talha";
var new_guest = "Waseem";
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir " + guest_list[i] + ',\n We are Inviting You Dinner on Tommorrow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tommorrow dinner, "));
