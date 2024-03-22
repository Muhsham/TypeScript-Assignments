//Exercise 32 Checking User
let current_users: string[] = ["Haseeb", "Muhsham", "Muddassir", "Urhaan", "Azhaan"];
let new_users: string[] = ["Muhsham", "chris", "Urhaan", "lisa", "matt"];

for (let new_username of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_username.toLowerCase());
    if (usernameExists) {
        console.log(`The username "${new_username}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
        current_users.push(new_username);
    }
}
