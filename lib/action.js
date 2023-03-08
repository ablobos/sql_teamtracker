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
        
        // requesting the name
        return inquirer.createPromptModule([
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
        ])
    }
}