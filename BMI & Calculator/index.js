#! /usr/bin/env node
import inquirer from "inquirer";
function promptOperation() {
    return inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Select operation:",
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Exponentiation",
                "Modulus",
                "BMI Calculation",
                "Exit",
            ],
        },
    ]);
}
function performOperation(operation) {
    switch (operation) {
        case "Addition":
            add();
            break;
        case "Subtraction":
            subtract();
            break;
        case "Multiplication":
            multiply();
            break;
        case "Division":
            divide();
            break;
        case "Exponentiation":
            exponentiate();
            break;
        case "Modulus":
            modulus();
            break;
        case "BMI Calculation":
            calculateBMI();
            break;
        case "Exit":
            console.log("Goodbye!");
            process.exit();
    }
}
function performCalculation(operation, calculation) {
    console.log(`${operation} result: ${calculation}`);
    promptOperation().then((answers) => performOperation(answers.operation));
}
function add() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number:",
        },
    ])
        .then((answers) => performCalculation("Addition", answers.num1 + answers.num2));
}
function subtract() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number:",
        },
    ])
        .then((answers) => performCalculation("Subtraction", answers.num1 - answers.num2));
}
function multiply() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number:",
        },
    ])
        .then((answers) => performCalculation("Multiplication", answers.num1 * answers.num2));
}
function divide() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter dividend:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter divisor:",
        },
    ])
        .then((answers) => {
        if (answers.num2 === 0) {
            console.log("Error: Division by zero");
            promptOperation().then((answers) => performOperation(answers.operation));
        }
        else {
            performCalculation("Division", answers.num1 / answers.num2);
        }
    });
}
function exponentiate() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "base",
            message: "Enter base:",
        },
        {
            type: "number",
            name: "exponent",
            message: "Enter exponent:",
        },
    ])
        .then((answers) => performCalculation("Exponentiation", Math.pow(answers.base, answers.exponent)));
}
function modulus() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number:",
        },
    ])
        .then((answers) => performCalculation("Modulus", answers.num1 % answers.num2));
}
function calculateBMI() {
    inquirer
        .prompt([
        {
            type: "number",
            name: "weight",
            message: "Enter weight (in kg):",
        },
        {
            type: "number",
            name: "height",
            message: "Enter height (in meters):",
        },
    ])
        .then((answers) => {
        const bmi = answers.weight / (answers.height * answers.height);
        performCalculation("BMI", bmi.toFixed(2));
    });
}
promptOperation().then((answers) => performOperation(answers.operation));
