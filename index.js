const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = [
    {
        type:"input",
        name:"teamName",
        message:"What is the name or role of your Team?"
    },
]

const init = () => {

}