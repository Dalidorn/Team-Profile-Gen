const inquirer = require('inquirer');

class Employee {
  constructor(name, ID, email, role) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.role = role;
  };

  getName() {
    return this.name;
  };

  getId() {
    return this.ID;
  };

  getEmail() {
    return this.email;
  };

  getRole() {
    return 'Employee'
  };
};

module.exports = Employee;
