
const inquirer = require("inquirer");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class App {
  constructor() {
    // Initialize manager and team members to be nothing
    this.manager = null;
    this.team = [];
  }

  // Starts the generator
  run() {
    this.askManager();
    this.askTeam();
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
          name: "manId"
        },
        {
          type: "input",
          message: "Enter team manager's email address",
          name: "manEmail"
        },
        {
          type: "input",
          message: "Enter team manager's office number",
          name: "manOffice"
        }
      ])
      .then((response) => {

      });
  }

  askTeam() {

  }

  exportToHTML() {
    console.log(this.manager, this.team);
  }
}

module.exports = App;
