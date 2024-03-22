"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const input1 = await inquirer_1.default.prompt({
    name: "num1",
    typr: "number",
    message: "kindly enter your first no:"
});
const input2 = await inquirer_1.default.prompt({
    name: "num2",
    typr: "number",
    message: "kindly enter your second no:"
});
let total = input1.num1 + input2.num2;
console.log(total);
