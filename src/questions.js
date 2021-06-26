const startingQuestions = [
    {
        type:"input",
        name:"teamName",
        message:"What is the name the team you are adding?",
        validate: teamNameValidate => {
            if (teamNameValidate && isNaN(teamNameValidate) ) {
                return true;
            } else {
                return "Please provide a team name."
            }
        }
    },
    {
        type:"input",
        name:"managerName",
        message:"What is the Team Manager's name?",
        validate: managerNameValidate => {
            if (managerNameValidate && isNaN(managerNameValidate)) {
                return true;
            } else {
                return "Please provide the Manager's name."
            }
        }
    },
    {
        type:"input",
        name:"managerId",
        message:"What is the Manager's Employee ID?",
        validate: managerIdValidate => {
           if (isNaN(managerIdValidate)){
            return "Please provide a valid Employee ID"
            } else {
                return true;
            }
        }
    },
    {
        type:"input",
        name:"managerEmail",
        message:"What is their email address?",
        validate: managerEmailValidate => {
            if (managerEmailValidate && isNaN(managerEmailValidate) && managerEmailValidate.includes("@")) {
                return true;
            } else {
                return "Please provide a valid email address."
            }
        }
    },
    {
        type:"input",
        name:"managerRoomNum",
        message:"What is the Manager's Room number (Number only)?",
        validate: managerRoomNumValidate => {
            if(isNaN(managerRoomNumValidate)){
                return "Please provide a valid Room Number"
            }
            return true;
        }
    },
    {
        type:"confirm",
        name:"newEmpVerify",
        message:"Would you like to add another employee to your team?"
    },
    {
        type:"list",
        name:"selectedEmployeeType",
        message:"Would you like to add an Engineer or an Intern?",
        choices:["Engineer", "Intern"],
        when:({newEmpVerify}) => {
            if (newEmpVerify) {
                return true
            } return false
        }
    }
]

const engineerQuestions = [
    {
        type:"input",
        name:"engineerName",
        message:"What is the name of the Engineer you wish to add?",
        validate: engineerNameValidate => {
            if (engineerNameValidate && isNaN(engineerNameValidate)) {
                return true;
            } else {
                return "Please provide the Engineer's name."
            }
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineers's Employee ID?",
        validate: engineerIdValidate => {
            if (isNaN(engineerIdValidate)) {
                return "Please provide a valid Employee ID,"
            } else {
                return true;
            }
        }
    },
    {
        type:"input",
        name:"engineerEmail",
        message:"What is their email address?",
        validate: engineerEmailValidate => {
            if (engineerEmailValidate && isNaN(engineerEmailValidate) && engineerEmailValidate.includes("@")) {
                return true;
            } else {
                return "Please provide a valid email address."
            }
        }
    },
    {
        type:"input",
        name:"engineerGitHub",
        message:"What is their GitHub username?",
        validate: githubValidate => {
            if (githubValidate && isNaN(githubValidate)) {
                return true;
            } else {
                return "Please provide their GitHub username,"

            }
        }
    },
    {
        type:"confirm",
        name:"addNewEngineerConfirm",
        message:"Would you like to add another Engineer?",
        default:"true"
    }
]

const internQuestions = [
    {
        type:"input",
        name:"internName",
        message:"What is the name of the Intern you wish to add?",
        validate: internNameValidate => {
            if (internNameValidate && isNaN(internNameValidate)) {
                return true;
            } else {
                console.log("Please provide the Intern's name.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "internId",
        message: "What is the Interns's Employee ID?",
        validate: internIdValidate => {
            if (isNaN(internIdValidate)) {
                return "Please provide a valid Employee ID"
            } else {
                return true;
            }
        }
    },
    {
        type:"input",
        name:"internEmail",
        message:"What is their email address?",
        validate: internEmailValidate => {
            if (internEmailValidate && isNaN(internEmailValidate) && internEmailValidate.includes("@")) {
                return true;
            } else {
                return "Please provide a valid email address."
            }
        }
    },
    {
        type:"input",
        name:"internSchool",
        message:"What school do they attend?",
        validate: internSchoolValidate => {
            if (internSchoolValidate && isNaN(internSchoolValidate)) {
                return true;
            } else {
                return "Please provide the Intern's School Name."
            }
        }
    },
    {
        type:"confirm",
        name:"addNewInternConfirm",
        message:"Would you like to add another Intern?",
        default:"true"
    }
]



module.exports = { startingQuestions, engineerQuestions, internQuestions }