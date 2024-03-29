#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 2233;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "Enter your pin",
});

if (pinAnswer.pin === myPin) {
  console.log("Pin is correct!");
  let operationAnswer = await inquirer.prompt([
    {
    name: "Operation",
    type: "list",
    choices: ["Withdraw", "Fast Cash", "Deposit", "Balance Inquiry"],
    message: "Please select an option:",
    
  },
]);

if (operationAnswer.Operation === "Withdraw") {
  let WithdrawAnswer = await inquirer.prompt({
    name: "withdraw",
    type: "number",
    message: "Enetr withdrawal amount:",
  });

 if (WithdrawAnswer.withdraw > myBalance) {
  console.log("Insufficient balance. cannot withdraw morethan your current balance.");
 } else {
  myBalance -= WithdrawAnswer.withdraw;
  console.log(`Your remaining balance is ${myBalance}`);
 }
}
else if (operationAnswer.Operation === "Fast Cash") {
   let fastCashAnswer = await inquirer.prompt({
    name: "fastcash",
    type: "list",
    choices: ["1000", "2000", "5000", "10000"],
    message: "Please select a fast cash option!",
   });
   if (fastCashAnswer.fastcash > myBalance) {
    console.log("Insufficient balance. cannot withdraw morethan your current balance.");
   }
   else {
    myBalance -= fastCashAnswer.fastcash;
    console.log(`Your remaining balance is ${myBalance}`);
   }
}
else if (operationAnswer.Operation === "Deposit") {
  let depositAnswer = await inquirer.prompt({
   name: "deposit",
   type: "number",
   message: "Enetr the amount you want to deposit",
  });
   myBalance += depositAnswer.deposit;
   console.log(`Your new balance is ${myBalance}`);
}
else if (operationAnswer.Operation === "Balance Inquiry") {
  console.log(`Your current balance is ${myBalance}`);
}
 console.log("Thankyou for using Hasi's ATM Service!");
}
 else {
  console.log("Incorrect pin!!!");
   
}