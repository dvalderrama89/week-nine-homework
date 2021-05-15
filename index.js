const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub name?',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        name: 'dependenciesCommand',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'runTestCommand',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'repoUse',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributingInfo',
        message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  .then((data) => {
    const filename = `README.md`;
    const formattedData = formatData(data);
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
    writeData(filename, formattedData);
  });

function formatData(data) {

    let licenseImgURL = `https://img.shields.io/badge/license-${data.license}-blue.svg`;

    let projectTitle = 

`# ${data.projectName}
![GitHub license](${licenseImgURL})
    
`;

    let description = 
`## Description
${data.description}
    
`;

    let formattedData = projectTitle + description;
    return formattedData;
}

function writeData(filename, data) {
    fs.writeFile(filename, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}