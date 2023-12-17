const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:"input",
        name:"github",
        message: "what is your GitHub username?"
      },
      {
        type:"input",
        name:"email",
        message: "what is your email address?"
      },
      {
        type:"input",
        name:"title",
        message: "what is your project's name?"
      },
      {
        type:"input",
        name:"description",
        message: "Please, write a short description"
      },
      {
        type:"list",
        name:"license",
        message: "what kind of license should your project have?",
        choices: ["MIT", "Apache"],
      },
      {
        type:"input",
        name:"install",
        message: "what command should be run to install dependencies?",
        default: "npm i"
      },
      {
        type:"input",
        name:"test",
        message: "what command should be run to run tests?",
        default: "npm test"
      },
      {
        type:"input",
        name:"usage",
        message: "what does the user need to know about using the repo?"
      },
      {
        type:"input",
        name:"contribution",
        message: "what does the user need to know about contributing to the repo?"
      }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`README.md`, )
}

// function to initialize program
function init() {
    inquirer
    .prompt(
        questions
    )
    .then((response)=> 
    console.log(response)
    )
};

// function call to initialize program
init();

