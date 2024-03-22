// Exercise 30 Hello Admin
let usernames: string[] = ["Admin", "Ali", "Asif", "Usama", "Farhan"];

for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
