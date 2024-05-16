#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    Pound: 0.80,
    Euro: 0.93,
    INR: 83.55,
    PKR: 278.04,
    SAR: 3.75
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "Pound", "Euro", "SAR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "Pound", "Euro", "INR", "PKR", "SAR"]
    },
    {
        name: "amount",
        message: "Enter the Amount",
        type: "input"
    }
]);
let userfrom_currency = user_input.from;
let userto_currency = user_input.to;
let from_amount = currency[userfrom_currency];
let to_amount = currency[userto_currency];
let amount = user_input.amount;
let base_amount = amount / from_amount;
let answer = (base_amount * to_amount);
console.log(Math.floor(answer));
