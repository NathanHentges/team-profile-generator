
const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("should initialize with given arguments, with properties matching get functions", () => {
    const eName = "Bob";
    const eId = "4";
    const eEmail = "ex@site.com";

    const employee = new Employee(eName, eId, eEmail);

    expect(employee.name).toEqual(eName);
    expect(employee.getName()).toEqual(eName);

    expect(employee.id).toEqual(eId);
    expect(employee.getId()).toEqual(eId);

    expect(employee.email).toEqual(eEmail);
    expect(employee.getEmail()).toEqual(eEmail);

    expect(employee.role).toEqual("Employee");
    expect(employee.getRole()).toEqual("Employee");
  });
});
