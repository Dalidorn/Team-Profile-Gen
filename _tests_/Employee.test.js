const Employee = require('../lib/Employee')

describe("Employee", () => {
  describe("getAttributes", () => {
    it("should create an Employee object and return the employee attributes passed through the input parameters", () => {

      const testName = "Steve";
      const testID = "999"
      const testEmail = 'steve@aol.com'

      const testEmployee = new Employee(testName, testID, testEmail);

      nameResult = testEmployee.getName();
      idResult = testEmployee.getId();
      emailResult = testEmployee.getEmail()
      roleResult = testEmployee.getRole()

      expect(nameResult).toEqual(testName);
      expect(idResult).toEqual(testID);
      expect(emailResult).toEqual(testEmail);
      expect(roleResult).toEqual('Employee');
    });
  });
});
