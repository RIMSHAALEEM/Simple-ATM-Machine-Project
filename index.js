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
            choices: ["Withdraw", "Checkbalance"],
        },
    ]);
    //   console.log(operationAnswer);
    if (operationAnswer.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your Remaining Balance is:" + myBalance);
    }
    else if (operationAnswer.operation === "Checkbalance") {
        console.log("Your Balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code");
}
