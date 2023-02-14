// TODO: Include packages needed for this application
const fs = require('fs');

fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the description?',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'Enter the table of contents?',
        name: 'Table of Contents',
      },
      {
        type: 'input',
        message: 'What are the installation instuctions?',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'What is the project usage?',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'What is the license?',
        name: 'License',
      },
      {
        type: 'input',
        message: 'Who are the contributers?',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'What are the tests?',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'What are the questions?',
        name: 'Questions',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
