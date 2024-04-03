#! /usr/bin/env node

console.log("************Wellcome in Hasi's TODOS************");

import inquirer from "inquirer";

let todos : string[]= ["Fasting", "Prayer"]

async function createTodo (todos:string[]) {

do{

    let ans = await inquirer.prompt({
        name: "Select",
        type: "list",
        message: "Select an operation",
        choices: ["add", "update", "read", "delete", "exit"]
    })

    if (ans.Select == "add"){
        let addTodo = await inquirer.prompt({
            name: "item",
            type: "input",
            message: "What would you want to add in todos?"
        });

        todos.push(addTodo.item)
        console.log(todos)
    }
    if (ans.Select == "update"){
        let updateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Which item you want to update?",
            choices: todos.map(item => item)
        })
        let addTodo = await inquirer.prompt({
            name: "item",
            type: "input",
            message: "What would you want to add in todos?"
        });

        let newTodos = todos.filter(val => val !== updateTodo.todo )
        todos = [...newTodos,addTodo.item]
        console.log(todos)
    }   

    if (ans.Select == "read"){
        console.log(todos)
    }
    if (ans.Select == "delete"){
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Which item you want to delete?",
            choices: todos.map(item => item)
                    
    })
    let newTodos = todos.filter(val => val !== deleteTodo.todo )
        todos = [...newTodos]
        console.log(todos)

}
    if (ans.Select === "exit") {
        break;
}
}while(true)
    
}

createTodo(todos)

