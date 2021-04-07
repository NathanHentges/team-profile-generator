
const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it("should initialize with given arguments, with properties matching get functions", () => {
    const eName = "Billy";
    const eId = "3";
    const eEmail = "ex@site.com";
    const office = "24";

    const employee = new Manager(eName, eId, eEmail, office);

    expect(employee.name).toEqual(eName);
    expect(employee.getName()).toEqual(eName);

    expect(employee.id).toEqual(eId);
    expect(employee.getId()).toEqual(eId);

    expect(employee.email).toEqual(eEmail);
    expect(employee.getEmail()).toEqual(eEmail);

    expect(employee.officeNumber).toEqual(office);
    expect(employee.getOffice()).toEqual(office);

    expect(employee.role).toEqual("Manager");
    expect(employee.getRole()).toEqual("Manager");
  });
});
