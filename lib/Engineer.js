const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(name, ID, email, role, githubUsername) {
    super(name, ID, email, role)
    this.githubUsername = githubUsername;
  };

  getgitHub() {
    return this.githubUsername
  };

  getRole() {
    return 'Engineer'
  };
};

module.exports = Engineer;