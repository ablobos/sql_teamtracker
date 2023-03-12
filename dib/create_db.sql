    DROP DATABASE IF EXISTS     company_mgmt;
    CREATE DATABASE company_mgmt;
    USE company_mgmt;

    DROP TABLE IF EXISTS departments;
    DROP TABLE IF EXISTS roles;
    DROP TABLE IF EXISTS employees;

    CREATE TABLE departments (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

    CREATE TABLE roles (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INTEGER,
        CONSTRAINT department_fk FOREIGN KEY (department_id)
        REFERENCES department_(id) ON DELETE CASCADE 
    );

    CREATE TABLE employees (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER,
        manager_id INTEGER,
        CONSTRAINT role_fk FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
        CONSTRAINT manager_fk FOREIGN KEY (manager_id) REFERENCES
        employees(id) ON DELETE SET NULL
    );
