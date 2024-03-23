#! usr/bin/env node
import inquirer from "inquirer";

console.log("Welcom to the Game");

const randomNumber = Math.floor(Math.random() * 10 + 1 );
  

const answer = await inquirer.prompt([
    {
    name:"userGuessNumber",
    type: "number",
    message: "pleas guess a Number between 1 to 10",

 },
]);
 

  if (answer . userGuessNumber === randomNumber) {
    console.log("Congratulation! you can guest Number.");
  }else{
    console.log("Lose Game , You Are Wroung Number");
  }
  