const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [

];
// function to prompt user for answers
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
      },
      {
        type: "input",
        name: "instructions",
        message: "Describe how to install your project."
      },
      {
        type: "input",
        name: "usage",
        message: "Describe the usage of this project. "
      },
      {
        type: "input",
        name: "contribution",
        message: "Who contibuted to this project"
      },
      {
        type: "input",
        name: "test",
        message: "How do you test this project"
      },
      {
        type: "input",
        name: "license",
        message: "Pick a license: MIT, Apache-2.0, MPL-2.0  "
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      }

    ]);
  }



// function to initialize program
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const markdown = generateMarkdown(answers);
  
      await writeFileAsync("readme2.md", markdown);
  
      console.log("Successfully wrote to readme2.md");
    } catch(err) {
      console.log(err);
    }
  }


// function call to initialize program
init();