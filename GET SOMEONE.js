const inquirer = require("inquirer");
const { startingQuestions, engineerQuestions, internQuestions, answers } = require("./src/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var finalAnswers;

const newAnswers = []

const init = () => {
    return inquirer.prompt(startingQuestions,answers);
}

const engineerLog = data => {
    if (!data.engineers) {
        data.engineers = []
    };

    inquirer.prompt(engineerQuestions, data)
        .then(newAnswers => {
            data.engineers.push(newAnswers)
            console.log(data)
            if (newAnswers.addNewEngineerConfirm) {
                return engineerLog(data)
            } else {
                return inquirer
                    .prompt([
                        {
                            type: "confirm",
                            name: "addInternsConfirm",
                            message: "Would you like at add any Interns to the team?",
                            default: "true"
                        }
                    ], data)
                    .then(internConfirm => {
                        console.log("internConfirm", internConfirm)
                        if (internConfirm.addInternsConfirm) {
                            return internLogShort(internConfirm)
                        }
                        return internConfirm
                    })
            };
        });
};

const engineerLogShort = data => {
    if (!data.engineers) {
        data.engineers = []
    };
    inquirer.prompt(engineerQuestions, data)
        .then(newAnswers => {
            data.engineers.push(newAnswers)
            console.log(data)
            if (newAnswers.addNewEngineerConfirm) {
                return engineerLogShort(data);
            }
            return data;
        });
};

const internLog = data => {
    if (!data.interns) {
        data.interns = []
    }
    inquirer.prompt(internQuestions, data)
        .then(internData => {
            data.interns.push(internData)
            console.log(data)
            if (internData.addNewEngineerConfirm) {
                return internLog(data)
            } else {
                return inquirer
                    .prompt([
                        {
                            type: "confirm",
                            name: "addEngineersConfirm",
                            message: "Would you like at add any Engineers to the team?",
                            default: "true"
                        }
                    ], data)
                    .then(engineerConfirm => {
                        console.log("engineerConfirm", engineerConfirm)
                        if (engineerConfirm.addEngineersConfirm) {
                            return engineerLogShort(engineerConfirm)
                        }
                        return engineerConfirm
                    })
            }
        })
}

const internLogShort = data =>{
    if (!data.interns) {
        data.interns = []
    }
    inquirer.prompt(internQuestions, answers)
        .then(internData => {
            data.interns.push(internData)
            if (internData.addNewInternConfirm) {
                return internLogShort(data)
            }
            return data;
        })
}

init()
    .then(data => {
        if (data.newEmpType === "Engineer") {
            return engineerLog(data);
        } else if(data.newEmpType === "Intern") {
            return internLog(data);
        }
        return data
    })
    .then(data => {
        console.log(data)
        console.log("You are here")
    })