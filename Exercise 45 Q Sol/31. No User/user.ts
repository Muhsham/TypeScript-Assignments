// Exercise 31 No User
let usernames: string[] = ["Admin", "Ali", "Farhan", "Asif", "Usama"];

for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
