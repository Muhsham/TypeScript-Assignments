//Exercise 32 Checking User
var current_users = ["Haseeb", "Muhsham", "Muddassir", "Urhaan", "Azhaan"];
var new_users = ["Muhsham", "chris", "Urhaan", "lisa", "matt"];
var _loop_1 = function (new_username) {
    var usernameExists = current_users.some(function (user) { return user.toLowerCase() === new_username.toLowerCase(); });
    if (usernameExists) {
        console.log("The username \"".concat(new_username, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_username, "\" is available."));
        current_users.push(new_username);
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
