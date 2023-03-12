USE company_mgmt;

INSERT INTO departments (name)
VALUES
 ("Payment Dpt."),
 ("Support Dpt."),
 ("Healthcare Dpt."),
 ("Insurance Dpt."),
 ("Maintenance Dpt"),
 ("Tech Dpt."),
 ("QA Dpt.");

 Insert Into roles (title, salary, department_id)
 VALUES
 ("Payment Admin(Payroll)", 50000, 1),
 ("Support Team Specialist", 60000, 2),
 ("Healthcare Specialist", 100000, 3),
 ("Insurance Agent", 120000, 4),
 ("Software Engineer", 125000, 6),
 ("DevOps Specialist", 150000, 6),
 ("The Barista", 10000, 5),
 ("Nurse", 30000, 3);

 INSERT INTO employees (first_name, last_name, role_id)
 VALUES
 ("James", "Bourne", 1),
 ("Jordan", "Lucas", 2),
 ("Anne", "Brightwood", 5),
 ("Megan", "Lawrence", 3),
 ("Mitch", "Banks", 6),
 ("Samuel", "Petrou", 7),
 ("Scott", "O'Connor", 5),
 ("Miles", "Morales", 4);

 