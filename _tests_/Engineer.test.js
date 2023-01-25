const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
  describe("getAttirbutes", () => {
    it("should  create an Engineer object and return the employee attributes passed through the input parameters", () => {

      const testName = "Steve";
      const testID = "999"
      const testEmail = 'steve@aol.com'
      const testRole = 'Engnineer'
      const testGithub = 'coderBob'

      const testEngineer = new Engineer(testName, testID, testEmail, testRole, testGithub);
      nameResult = testEngineer.getName();
      idResult = testEngineer.getId();
      emailResult = testEngineer.getEmail()
      roleResult = testEngineer.getRole()
      githubResult = testEngineer.getgitHub()

      expect(nameResult).toEqual(testName);
      expect(idResult).toEqual(testID);
      expect(emailResult).toEqual(testEmail);
      expect(roleResult).toEqual('Engineer');
      expect(githubResult).toEqual(testGithub);

    });
  });
});
