#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1357; //pin code
let answer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (answer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one of the options",
            type: "list",
            choices: ["Withdraw", "Checkbalance", "FastCash"],
        },
    ]);
    //   console.log(operationAnswer);
    // withdraw condition
    if (operationAnswer.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        // condition for insufficient balance
        if (amountAns.amount > myBalance) {
            console.log("Your Balance is Insufficient");
        }
        // = += -=
        else {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining Balance is:${myBalance}`);
        }
    }
    //fastcash condition
    else if (operationAnswer.operation === "FastCash") {
        let fast = await inquirer.prompt([{
                name: "FastCash",
                message: "Select the amount which you want to withdraw",
                type: "list",
                choices: [1000, 2000, 5000, 8000, 10000]
            }]);
        myBalance -= fast.FastCash;
        console.log(`You have successfully withdrawn ${fast.FastCash} \nYour remaining balance is:${myBalance} `);
    }
    //checkbalace condition
    else if (operationAnswer.operation === "Checkbalance") {
        console.log(`Your Balance is:${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
