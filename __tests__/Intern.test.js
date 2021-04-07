
const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  it("should initialize with given arguments, with properties matching get functions", () => {
    const eName = "Billy";
    const eId = "3";
    const eEmail = "ex@site.com";
    const school = "Harvard";

    const employee = new Intern(eName, eId, eEmail, school);

    expect(employee.name).toEqual(eName);
    expect(employee.getName()).toEqual(eName);

    expect(employee.id).toEqual(eId);
    expect(employee.getId()).toEqual(eId);

    expect(employee.email).toEqual(eEmail);
    expect(employee.getEmail()).toEqual(eEmail);

    expect(employee.school).toEqual(school);
    expect(employee.getSchool()).toEqual(school);

    expect(employee.role).toEqual("Intern");
    expect(employee.getRole()).toEqual("Intern");
  });
});
