const generateMarkdown = require('./utils/generateMarkdown')

const inquirer = require('inquirer')

const fs = require('fs')

const questions = [ 
    {
        type: 'input',
        name: 'github',
        message: 'What is your gitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What do users need to know about contributing to this repository?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'to install dependencies run npm install through the command line',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'to test the file run npm test through the command line',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this project using?',
        choices: ['MIT','Apache 2.0','Mozilla Public License','GNU GPL v3','Eclipse','Boost', 'Perl', 'SIL', ]
    },

];


function init() {
    return inquirer.prompt(questions)
}


init()
    .then(projectData => {
        fs.writeFile('./dist/README.md', generateMarkdown(projectData) , err =>{
            if(err) throw err

            console.log(`
            ===============================================
            README created check it out in the dist folder!
            ===============================================
            `);
        })
    })
    .catch(err =>{
        console.log(err)
    })

