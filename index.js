// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./js/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'To use must have inquirer@8.2.4 and run by using the following command: node index.js',
       
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    }, 
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license?',
        choices: ['MIT', 'Apache License 2.0', 'GPL 3.0', 'BSD 3-Clause', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'To test use (npm).',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project name?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error: could not write the file:', err);
            return;
        }
        console.log('README.md file has been created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
