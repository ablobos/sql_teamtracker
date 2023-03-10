const inquirer = require('inquirer');
const db = require('../db/connect');

//class, which carries out all the SQL and inquirer-related functionality
//the features are separated for readability's sake
class InquirerActionHandler {

    //SQL-querying all Departments and displaying them as a table
    static viewAllDepartments(callback){
        const sql_query = "SELECT * FROM departments";
        db.query(sql_query, (err, rows) => {
            if(err) throw err;
            console.table(rows);
            return callback();
        })
    };

    //SQL-querying all Roles and displaying them as a table
    static viewAllRoles(callback){
        const sql_query = `SELECT r.title, r. salary, d.name AS department_name
                            FROM roles r
                            LEFT JOIN departments d ON r.department_id = d.id`;
        db.query(sql_query, (err, rows) => {
            if(err) throw err;
            console.table(rows);
            return callback();
        })
    };

    //now SQL-querying all Employees and displaying them as a table
    static viewAllEmployees(callback){
        const sql_query = `SELECT e.id, e.first_name, e.last_name, r.title AS role_name, r.salary AS salary, e.manager_id
                FROM employees e
                LEFT JOIN roles r ON e.role_id = r.id`;
        db.query(sql_query, (err, rows) => {
            if(err) throw err;
            console.table(rows);
            return callback();
        })
    }

    //add department
    static addDepartment(callback){


        // requesting the name
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Input a name for a new Department",
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log("Department name cant be blank.");
                        return false;
                    }
                }
            }
        ]).then(answer => { //executing a query based on the user's input
            const sql_query = `INSERT INTO departments (name) VALUES ('${answer.name})`;
            db.query(sql_query, (err) => {
                if (err) throw err;
                console.log("A new department has been added");
                return this.viewAllDepartments(callback);
            })
        })
    };

    //add a new role and saving it to DB
    static addRole(callback){
        //first stage - getting a Role's name and salary (self-contained, non FK-values)
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "what is the name of this Role",
                validate: roleInput => {
                    if (roleInput) {
                        return true;
                    } else {
                        console.log("Role name cant be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for this Role?",
                validate: salaryInput => {
                    if ((salaryInput) && (salaryInput > 0)){
                        return true;
                    } else {
                        return false
                    }
                }
            }
        ]).then(answers => {   // Step 2 - getting departments and suggesting them as a FK for future Role instance
            const choices = [answers.name, answers.salary];
            const sql_query = "SELECT * FROM departments";
            db.query(sql_query, (err, rows) => {
                if(err) throw err;
                const allDepartments = rows.map(({name, id}) => ({name: name, value: id})); //all displayed department ids are represented by their names
                inquirer.prompt
                ([
                  { 
                     type: "list",
                     name: "department",
                     message: "What department does this Role belong to?",
                     choices: allDepartments
                  }  
              ]).then(answer => { //step 3 -inserting a new role instance with the previously given parameters
                const departmentAnswer = answer.department;
                const sql_query = `Insert into roles (title, salary, department_id)
                    VALUES ("${choices[0]}", ${choices[1]}, ${departmentAnswer})`;
                db.query(sql_query, (err) => {
                    if (err) throw err;
                    console.log("Role added!");
                    return this.viewAllRoles(callback);
                })
            })
        })
    })    
});

// adding an employee to the db
static addEmployee(callback){

    //step 1 getting first and last names
    return inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What's the Employee's first name?",
            validate: firstNameInput => {
                if (firstNameInput){
                return true;
            } else {
                console.log("Employee's first name cant be blank.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "last-name",
        message: "What's the employee's last name?",
        validate: lastNameInput => {
            if (lastNameInput){
                return true;
            } else {
                console.log("Emplyee's last name cant be blank.")
                return false;
            }
        }
    }
]).then(answers => { //step 2 getting all roles and suggesting them as a list
    const params = [answers.first_name, answers.last_name];
    const sql_query = "SELECT * FROM roles";

})
}