#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

async function atmFunction() {
  let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your Pin",
      type: "number",
    },
  ]);

  if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAnswer = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["Withdraw", "Check Balance"],
      },
    ]);

    if (operationAnswer.operation === "Withdraw") {
      let amountAnswer = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter withdrawal amount",
          type: "number",
        },
      ]);

      let withdrawalAmount = amountAnswer.amount;

      if (withdrawalAmount <= myBalance) {
        myBalance -= withdrawalAmount;
        console.log("Your remaining balance is: " + myBalance);
      } else {
        console.log("Withdrawal amount exceeds your balance!");
      }
    } else if (operationAnswer.operation === "Check Balance") {
      console.log("Your current balance is : " + myBalance);
    }
  } else {
    console.log("Incorrect pin code");
  }
}

async function fastCashWithdrawal(amount: number) {
  if (amount <= myBalance) {
    myBalance -= amount;
    console.log(
      "Fast cash withdrawal successful. Your remaining balance is: " + myBalance
    );
  } else {
    console.log("Fast cash withdrawal amount exceeds your balance!");
  }
}

(async () => {
  await atmFunction();

  // Fast cash options
  let fastCashAnswer = await inquirer.prompt([
    {
      name: "fastCash",
      message: "Do you want to perform a fast cash withdrawal?",
      type: "confirm",
    },
  ]);

  if (fastCashAnswer.fastCash) {
    let fastCashAmount = await inquirer.prompt([
      {
        name: "amount",
        message: "Select fast cash withdrawal amount",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);

    await fastCashWithdrawal(fastCashAmount.amount);
  }
})();
