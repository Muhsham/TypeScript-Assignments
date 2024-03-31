#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition)
{
let addTask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: "What you want to add in your todo list? "
    },

    {
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more? ",
        default: "False"    
    },

    {
        name: "greeting",
        type: "wish",
        message: "Thanks for add things in Hasi's todos"
        
    }

])
todos.push(addTask.todo);
condition = addTask.addmore
console.log(todos);
}