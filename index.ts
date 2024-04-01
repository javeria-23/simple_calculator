#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wellcome message

console.log("\n\tWellcome To\'CodewithJaveria\'-CLI Simple Calculator\n");

// Asking Questions from Users through Inquirer

let answers= await inquirer.prompt([
    {message:"Enter first Number",type: "number", name: "firstNumber" },
    {message:"Enter second Number",type: "number", name: "secondNumber" },
   {
    message:" Select one Operator to perfom operations",
    type:"list",
    name:"operator",
    choices:["Addition","Subtractions","Multiplication","Division"],
   },
]);

//conditional statement if-else:

if(answers.operator==="Addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (
    answers.operator==="Subtractions"
){
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(
answers.operator==="Multiplication"
){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(
    answers.operator==="Division"
){
    console.log(answers.firstNumber / answers.secondNumber);
}
else{
    console.log("please select valid operator")
}