const fs = require("fs");
const inquirer = require("inquirer");
const { startingQuestions, engineerQuestions, internQuestions } = require("./src/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/html-template");

const answers = []

// empty employees object
const employeesObj = {
    teamName:"",
    manager: [],
    engineers: [],
    interns: []
}

// testObj for testing the HTML generation
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

// funtion that initiates the questionnaire
const init = () => {
    return inquirer.prompt(startingQuestions,answers);
}

// if engineers are selected to be added first, this is the logic for adding them
const engineerLog = data => {
    if (!data.engineers) {
        data.engineers = []
    };

    return inquirer.prompt(engineerQuestions, answers)
        .then(newAnswers => {
            data.engineers.push(newAnswers)
            // console.log(data)
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
                        // console.log("internConfirm", internConfirm)
                        if (internConfirm.addInternsConfirm) {
                            return internLogShort(internConfirm)
                        }
                        return internConfirm
                    })
            };
        });
};

// if interns are added first this is logic to add engineers if the user asks to add engineers
const engineerLogShort = data => {
    if (!data.engineers) {
        data.engineers = []
    };
    return inquirer.prompt(engineerQuestions, answers)
        .then(newAnswers => {
            data.engineers.push(newAnswers)
            // console.log(data)
            if (newAnswers.addNewEngineerConfirm) {
                return engineerLogShort(data);
            }
            return data;
        });
};

// if interns are selected to be added first, this is the logic for adding them
const internLog = data => {
    if (!data.interns) {
        data.interns = []
    }
    return inquirer.prompt(internQuestions, answers)
        .then(internData => {
            data.interns.push(internData)
            // console.log(data)
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
                        // console.log("engineerConfirm", engineerConfirm)
                        if (engineerConfirm.addEngineersConfirm) {
                            return engineerLogShort(engineerConfirm)
                        }
                        return engineerConfirm
                    })
            }
        })
}

// if engineers are added first this is logic to add interns if the user asks to add interns
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

// converts question answers to an object to passthrough HTML generation
const createEmployeeObjs = empData => {
    employeesObj.teamName = empData.teamName;
    const manager = new Manager (empData.managerName, empData.managerId, empData.managerEmail, empData.managerRoomNum)
    employeesObj.manager = manager;

    if(empData.engineers) {
        for (let i = 0; i < empData.engineers.length; i++){
            let emp = empData.engineers[i]
            const engineer = new Engineer (emp.engineerName, emp.engineerId, emp.engineerEmail, emp.engineerGitHub);
            employeesObj.engineers.push(engineer);
        }
    }

    if(empData.interns) {
        for (let i = 0; i < empData.interns.length; i++){
            let emp = empData.interns[i]
            const intern = new Intern (emp.internName, emp.internId, emp.internEmail, emp.internSchool);
            employeesObj.interns.push(intern);
        }
    }
    return employeesObj
};

// creates HTML file and saves it to the /dist folder
const createHtml = data => {
return new Promise ((resolve, reject) => {
    fs.writeFile("./dist/team.html", data, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok:true,
                message:"Creating file... \n Your team site can be found in the dist folder."
            })
        })
    })
}

init()
    .then(data => {
        if (data.newEmpVerify && data.selectedEmployeeType === "Engineer") {
            return engineerLog(data);
        } else if (data.selectedEmployeeType === "Intern") {
            return internLog(data);
        } else {
            return data
        }
    })
    .then (data => {
        return createEmployeeObjs(data)
    })
    .then (employeeObj => {
        return generateHTML(employeeObj);
    })
    .then (tempLitHtml => {
        return createHtml(tempLitHtml)
    });
