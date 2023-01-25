const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create two arrays to iterate over in our final return
const team = [];
const cards = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const teamManager = () => {
  // start prompt
  inquirer.prompt([
    {
      type: 'input',
      message: `Enter the team manager's name.`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is the manager's ID Number?`,
      name: 'idNum',
    },
    {
      type: 'input',
      message: `What is the manager's email address?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is the manager's office number?`,
      name: 'officeNum',
    },
  ]).then((response) => {
    // add that member to the team array as a new Manager
    team.push(new Manager(response.name, response.idNum, response.email, response.officeNum))

    // end by envoking function for  next menu
    addTeamMember();
  });
};

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

function addTeamMember() {
  // prompt for choice
  inquirer.prompt([
    {
      type: 'list',
      message: `What would you like to do next?`,
      name: 'addTeamMember',
      choices: ['Add an Engineer', 'Add an Intern', `Finished building`]
    }
  ]).then((response) => {
    // check response

    if (response.addTeamMember == 'Add an Engineer') {
      // WHEN I select the engineer option
      // THEN I am prompted to enter the engineer's name, ID, email, and GitHub username, and I am taken back to the menu

      //start prompt
      inquirer.prompt([
        {
          type: 'input',
          message: `What is the new engineer's name?`,
          name: 'name',
        },
        {
          type: 'input',
          message: `What is the new engineer's ID Number?`,
          name: 'idNum',
        },
        {
          type: 'input',
          message: `What is the new engineer's email?`,
          name: 'email',
        },
        {
          type: 'input',
          message: `What is the engineer's gitHub username?`,
          name: 'username',
        }
      ]).then((response) => {
        // add that member to the team array as a new Engi
        team.push(new Engineer(response.name, response.idNum, response.email, 'Engineer', response.username));
        // return to previous menu
        addTeamMember();
      });
      // --END ENGI IF--

    } else if (response.addTeamMember == 'Add an Intern') {
      // WHEN I select the intern option
      // THEN I am prompted to enter the intern's name, ID, email, and school, and I am taken back to the menu

      //start prompt
      inquirer.prompt([
        {
          type: 'input',
          message: `What is the new intern's name?`,
          name: 'name',
        },
        {
          type: 'input',
          message: `What is the new intern's ID Number?`,
          name: 'idNum',
        },
        {
          type: 'input',
          message: `What is the new intern's email address?`,
          name: 'email',
        },
        {
          type: 'input',
          message: `What school does the intern attend?`,
          name: 'school',
        }
      ]).then((response) => {
        // add that member to the team array as a new Intern
        team.push(new Intern(response.name, response.idNum, response.email, 'Intern', response.school));
        // return to previous menu
        addTeamMember();
      });
      // --END INTERN IF--

    } else {
      // --FINISHED PROMPTS BUILDING DOCUMENT--

      const headHTML = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>My Team</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
          <link rel="stylesheet" href="../dist/style.css">
        </head>
        
        <body >
          <header>
            <h1 class='text-center'>My Team</h1>
          </header>
          
          <main class="container">
            <div class="row justify-content-center text-center employee-cards">
            `

      const footHTML = `
          </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        </body>
      </html>
      `

      team.forEach(member => {
        if (member.role === 'Manager') {
          const card =
            ` <div class="card col-3">
                <div class="card-header">${member.role}</div>
                <div class="card-body">
                  <h5 class="card-title">${member.name}</h5>
                  <ul>
                    <li><strong>Employee ID: </strong>${member.ID}</li>
                    <li><strong>Email: </strong><a href="mailto: ${member.email}">${member.email}</a></li>
                    <li><strong>Office Number: </strong>${member.officeNumber}</li>
                  </ul>
                </div>
              </div>

              `
          cards.push(card)
        } else if (member.role === 'Engineer') {
          const card =
            `<div class="card col-3">
                <div class="card-header">${member.role}</div>
                <div class="card-body">
                  <h5 class="card-title">${member.name}</h5>
                  <ul>
                    <li><strong>Employee ID: </strong>${member.ID}</li>
                    <li><strong>Email: </strong><a href="mailto: ${member.email}">${member.email}</a></li>
                    <li><strong>GitHub: </strong><a href=https://www.github.com/${member.githubUsername} target="_blank">${member.githubUsername} </a> </li>
                  </ul>
                </div>
              </div>
              
              `
          cards.push(card)
        } else if (member.role === 'Intern') {
          const card =
            `<div class="card col-3">
                  <div class="card-header">${member.role}</div>
                  <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <ul>
                      <li><strong>Employee ID: </strong>${member.ID}</li>
                      <li><strong>Email: </strong><a href="mailto: ${member.email}">${member.email}</a></li>
                      <li><strong>School: </strong>${member.school}</li>
                    </ul>
                  </div>
              </div>
              
              `
          cards.push(card)
        }
      })

      const printHTML = headHTML + cards.join('') + footHTML

      fs.writeFile('./dist/index.html', printHTML, (err) => {
        err ? console.error(err) : console.log('HTML Created!')
      });
    };
  });
};

// ---APP START---
teamManager();