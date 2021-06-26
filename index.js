const inquirer = require("inquirer");
const { startingQuestions, engineerQuestions, internQuestions } = require("./src/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const answers = []

const employeesObj = {
    manager: [],
    engineers: [],
    interns: []
}


const testObj = {
    teamName: 'Duh Bestest Team Evur',
    managerName: 'Alphonso',
    managerId: '5345',
    managerEmail: 'alphonso@testemail.com',
    managerRoomNum: '3',
    newEmpVerify: true,
    selectedEmployeeType: 'Engineer',
    engineers: [
      {
        engineerName: 'Bob',
        engineerId: '81143',
        engineerEmail: 'bob@testemail.com',
        engineerGitHub: 'bobbybuilds',
        addNewEngineerConfirm: true
      },
      {
        engineerName: 'Sandy',
        engineerId: '324234',
        engineerEmail: 'sandy@testemail.com',
        engineerGitHub: 'sandycheeks',
        addNewEngineerConfirm: false
      }
    ],
    addInternsConfirm: true,
    interns: [
      {
        internName: 'Malcom',
        internId: '54568',
        internEmail: 'inthemiddle@school.com',
        internSchool: 'Middle School',
        addNewInternConfirm: true
      },
      {
        internName: 'Bartholomew',
        internId: '4534',
        internEmail: 'bart@school.com',
        internSchool: 'Springfield Elementary',
        addNewInternConfirm: false
      }
    ]
  }

const init = () => {
    return inquirer.prompt(startingQuestions,answers);
}

const engineerLog = data => {
    if (!data.engineers) {
        data.engineers = []
    };

    return inquirer.prompt(engineerQuestions, answers)
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
    return inquirer.prompt(engineerQuestions, answers)
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
    return inquirer.prompt(internQuestions, answers)
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
    return inquirer.prompt(internQuestions, answers)
        .then(internData => {
            data.interns.push(internData)
            if (internData.addNewInternConfirm) {
                return internLogShort(data)
            }
            return data;
        })
}

const createEmployeeObjs = empData => {
    // create manager object
    // if engineers exist
        // for each create engineer object
    // if interns exist
        // for each create intern object
    // push all created objects to their respective arrays in the employee obj

}

init()
    .then(data => {
        console.log("newEmps", data)
        if (data.newEmpVerify && data.selectedEmployeeType === "Engineer") {
            return engineerLog(data);
        } else if (data.selectedEmployeeType === "Intern") {
            return internLog(data);
        } else {
            return data
        }
    })
    .then (data => {
        console.log(data)
        console.log("You are here")
    })