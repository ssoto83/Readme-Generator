// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./js/generateMarkdown.js');
// const { error } = require('console');


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
        message: '',
        default: 'Must install inquirer@8.2.4 + npm i',
       
    }, 
    {
        type: 'input',
        name: 'usage',
        message: '',
        default: 'Run the application by using: node index.js',
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license?',
        choices: ['MIT', 'Apache License 2.0', 'GPL 3.0', 'BSD 3-Clause', 'none'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contributing guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Run npm test.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?',
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
    inquirer.prompt(questions).then((answers) => {
        console.log('Capture data:', answers);
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
        }).catch((error) => {
            console.error('Error starting the application', error);
});
}
// Function call to initialize app
init();
