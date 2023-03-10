const inquirer = require("inquirer");
const handler = require('.actions');

// default menu of options, which releases in the end of each action
function startPolling(){
    inquirer.createPromptModule([
        { type: 'list', message: 'What do you want to do?', name: 'actions', choices: [
            'View all departments',
            'View all roles',
            'View all Employees',
            'Add a Department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
        ]}
    ]).then(answers => {  //accurate response provided for each course of action, provided in the basic questions section
        const userInput = answers.actions;

        if (userInput == "View all Departments"){
            handler.viewAllDepartments(startPolling);
        };

        if (userInput == "View all Roles"){
            handler.viewAllDepartments(startPolling);

        };

        if (userInput == "View all Employees"){
            handler.viewAllEmployees(startPolling);
        
        };

        if (userInput == "Add a department"){
            handler.addDepartment(startPolling);
        
        };

        if (userInput == "Add a role"){
            handler.addRole(startPolling);
        
        };

        if (userInput == "Add an employee"){
            handler.addEmployee(startPolling);
        
        };

        if (userInput == "Update an employee role"){
            handler.updateEmployeeRole(startPolling);
        
        };

    })};

    module.exports = startPolling;