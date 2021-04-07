
const inquirer = require("inquirer");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const genHTML = require("../src/generateHTML");

class App {
  constructor() {
    // Initialize manager and team members to be nothing
    this.team = [];
  }

  // Starts the generator
  run() {
    this.askManager();
  }

  askManager() {
    this.team = [];

    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter team manager's name",
          name: "manName"
        },
        {
          type: "input",
          message: "Enter team manager's employee ID",
          name: "manId",
          // Should only be number; using regex to validate
          validate: (val) => /^\d+$/.test(val)
        },
        {
          type: "input",
          message: "Enter team manager's email address",
          name: "manEmail"
        },
        {
          type: "input",
          message: "Enter team manager's office number",
          name: "manOffice",
          // Should only be number; using regex to validate
          validate: (val) => /^\d+$/.test(val)
        }
      ])
      .then((response) => {
        // Add manager object to the team with user inputs
        const newMan = new Manager(response.manName, response.manId, response.manEmail, response.manOffice);
        this.team.push(newMan);
        // Run askTeam, to get user input for engineer/intern or finish
        this.askTeam();
      });
  }

  askTeam() {
    inquirer.prompt([
      {
        type: "list",
        message: "Choose what to do next",
        name: "choice",
        choices: ["Add an engineer", "Add an intern", "Finish building team"]
      }
    ])
      .then((response) => {
        // If they choose to finish,
        if (response.choice === "Finish building team") {
          // Run finish function and end
          this.finishApp();
          return;
        }
        // If they chose to add engineer,
        if (response.choice === "Add an engineer") {
          // Ask for the engineer, whic loops back and does askTeam
          this.askEngineer();
        } else if (response.choice === "Add an intern") {
          // Same if they chose intern
          this.askIntern();
        }
      });
  }

  askEngineer() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter engineer's name",
          name: "engName"
        },
        {
          type: "input",
          message: "Enter engineer's employee ID",
          name: "engId",
          // Should only be number; using regex to validate
          validate: (val) => /^\d+$/.test(val)
        },
        {
          type: "input",
          message: "Enter engineer's email address",
          name: "engEmail"
        },
        {
          type: "input",
          message: "Enter engineer's GitHub username",
          name: "engGitHub",
        }
      ])
      .then((response) => {
        const newEng = new Engineer(response.engName, response.engId, response.engEmail, response.engGitHub);
        this.team.push(newEng);
        this.askTeam();
      });
  }

  askIntern() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter intern's name",
          name: "intName"
        },
        {
          type: "input",
          message: "Enter intern's employee ID",
          name: "intId",
          // Should only be number; using regex to validate
          validate: (val) => /^\d+$/.test(val)
        },
        {
          type: "input",
          message: "Enter intern's email address",
          name: "intEmail"
        },
        {
          type: "input",
          message: "Enter intern's school",
          name: "intSchool",
        }
      ])
      .then((response) => {
        const newInt = new Intern(response.intName, response.intId, response.intEmail, response.intSchool);
        this.team.push(newInt);
        this.askTeam();
      });
  }

  finishApp() {
    const genCards = this.teams.reduce(
      (acc, member) => {
        switch (member.getRole()) {
          case "Manager":
            return acc + genHTML.genManagerCard(
              member.getName(),
              member.getId(),
              member.getEmail(),
              member.getOffice()
            );

          case "Engineer":
            return acc + genHTML.genEngineerCard(
              member.getName(),
              member.getId(),
              member.getEmail(),
              member.getGithub()
            );

          case "Intern":
            return acc + genHTML.genInternCard(
              member.getName(),
              member.getId(),
              member.getEmail(),
              member.getSchool()
            );
          default:
            return acc;
        }
      },
      ""
    );
    const distHTMLtext = genHTML.genHTML(genCards);
  }
}

module.exports = App;
