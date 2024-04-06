#! /usr/bin/env node
console.log("***** Welcome Hasi's Currency Exchange *****");
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.71,
    INR: 74.57,
    PKR: 280,
};
let user_ans = await inquirer.prompt([
    {
        name: "from",
        message: "Which currency from you want to convert",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Please select currency you want",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Please enter amount",
        type: "number",
    }
]);
let fromAmount = currency[user_ans.from];
let toAmount = currency[user_ans.to];
let amount = user_ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
