// verifies if engineers and/or interns were added in the questionnaire
const verifyExist = employeeObj => {
    const existObj = {
        engEx:null,
        intEx:null
    }
    const { engineers, interns } = employeeObj;
    if(engineers.length > 0) {
        existObj.engEx = true
    } else {
        existObj.engEx = false
    }
    if(interns.length > 0) {
        existObj.intEx = true
    } else {
        existObj.intEx = false
    }
    // console.log(existObj)
    return existObj
}

// for loop that creates cards for each engineer added
const engineerCards = engineersArr => {
    const cardArr = [];
    engineersArr.forEach(engineer => {
        let engCard =  `
            <div class="card col-xl-2 col-lg-4 col-md-6 col-sm-12 w-sm-100 mx-2 my-sm-2 px-0" style="width: 18rem;">
                <div class="card-body bg-info mx-0 px-3">
                    <h5 class="card-title">${engineer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-black-50">ID #: ${engineer.id}</h6>
                </div>
                <ul class="list-group list-group-flush px-2">
                    <li class="list-group-item">Email: <a href="mailto: ${engineer.email}"
                            target="_blank">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        `
        cardArr.push(engCard);
    })
    return cardArr.join("")
}

// if engineers passed verifyExist add engineer section in HTML
const renderEngineer = (teamCheckObj, engineersArr) => {
    if (teamCheckObj.engEx === true) {
        return `
        <section id="engineers" class="row ">
            <div class="border-bottom border-secondary col-12">
                <h2 id="engineer-title col-12">Engineers</h2>
            </div>
            ${engineerCards(engineersArr)}
        </section>`
    } else {
        return ``
    }
}

// for loop that creates cards for each intern added
const internCards = internsArr => {
    const cardArr = [];
    internsArr.forEach(intern => {
        let engCard =  `
            <div class="card col-xl-2 col-lg-4 col-md-6 col-sm-12 w-sm-100 mx-2 my-sm-2 px-0" style="width: 18rem;">
                <div class="card-body bg-info mx-0 px-3">
                    <h5 class="card-title">${intern.name}</h5>
                    <h6 class="card-subtitle mb-2 text-black-50">ID #: ${intern.id}</h6>
                </div>
                <ul class="list-group list-group-flush px-2">
                    <li class="list-group-item">Email: <a href="mailto: ${intern.email}"
                            target="_blank">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        `
        cardArr.push(engCard);
    })
    return cardArr.join("")
}

// if interns passed verifyExist add intern section in HTML
const renderIntern = (teamCheckObj, internsArr) => {
    if (teamCheckObj.intEx === true) {
        return `
        <section id="interns" class="row ">
            <div class="border-bottom border-secondary col-12">
                <h2 id="intern-title col-12">Interns</h2>
            </div>
            ${internCards(internsArr)}
        </section>`
    } else {
        return ``
    }
}

module.exports = employeeObj => {
    const { teamName, manager, engineers, interns } = employeeObj;
    const teamCheckObj = verifyExist(employeeObj);
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${teamName} - Team View</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body class="bg-light">
    <header class="container-fluid py-2 mb-2 bg-primary">
        <h1>${teamName}</h1>
    </header>
    <main class=container>
        <section id="manager" class="row">
            <div class="border-bottom border-secondary col-12">
                <h2 id="manager-title col-12">Manager</h2>
            </div>
            <div class="card col-xl-2 col-lg-4 col-md-6 col-sm-12 w-sm-100 mx-2 my-sm-2 px-0" style="width: 18rem;">
                <div class="card-body bg-info mx-0 px-3">
                    <h5 class="card-title">${manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-black-50">ID #: ${manager.id}</h6>
                </div>
                <ul class="list-group list-group-flush px-2">
                    <li class="list-group-item">Email: <a href="mailto: ${manager.email}"
                            target="_blank">${manager.email}</a></li>
                    <li class="list-group-item">Room #: ${manager.room}</li>
                </ul>
            </div>
        </section>
        ${renderEngineer(teamCheckObj, engineers)}
        ${renderIntern(teamCheckObj, interns)}
    </main>
</body>
</html>`
}