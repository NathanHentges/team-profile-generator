
const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  it("should initialize with given arguments, with properties matching get functions", () => {
    const eName = "John";
    const eId = "2";
    const eEmail = "ex@site.com";
    const github = "UserName";

    const employee = new Engineer(eName, eId, eEmail, github);

    expect(employee.name).toEqual(eName);
    expect(employee.getName()).toEqual(eName);

    expect(employee.id).toEqual(eId);
    expect(employee.getId()).toEqual(eId);

    expect(employee.email).toEqual(eEmail);
    expect(employee.getEmail()).toEqual(eEmail);
    
    expect(employee.github).toEqual(github);
    expect(employee.getGithub()).toEqual(github);

    expect(employee.role).toEqual("Engineer");
    expect(employee.getRole()).toEqual("Engineer");
  });
});
