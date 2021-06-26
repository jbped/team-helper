const startingQuestions = [
    {
        type:"input",
        name:"teamName",
        message:"What is the name the team you are adding?"
    },
    {
        type:"input",
        name:"managerName",
        message:"What is the Team Manager's name?"
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
        message:"What is their email address?"
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
        name:"newEmpType",
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
        message:"What is the name of the Engineer you wish to add?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineers's Employee ID?",
        validate: engineerIdValidate => {
            if (isNaN(engineerIdValidate)) {
                return "Please provide a valid Employee ID"
            } else {
                return true;
            }
        }
    },
    {
        type:"input",
        name:"engineerEmail",
        message:"What is their email address?"
    },
    {
        type:"input",
        name:"engineerGitHub",
        message:"What is their GitHub username?"
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
        message:"What is the name of the Intern you wish to add?"
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
        message:"What is their email address?"
    },
    {
        type:"input",
        name:"internSchool",
        message:"What school do they attend?"
    },
    {
        type:"confirm",
        name:"addNewInternConfirm",
        message:"Would you like to add another Intern?",
        default:"true"
    }
]

const answers = []

module.exports = { startingQuestions, engineerQuestions, internQuestions, answers }