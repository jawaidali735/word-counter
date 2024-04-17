#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please enter your sentence"
    }
]);
const wordCounter = answer.sentence.trim().split(" ");
let wordNumber = wordCounter.length;
console.log(chalk.yellow(`Your word count is: ${chalk.green(wordNumber)}`));
