//BDD
const statsMachine = require("../_lib/student-stats.js")
const StudentStats = require("../_lib/data.json");


describe("student Stats", () => {
  let statsMachine
  let processedData

  beforeEach(() => {
    statsMachine = new StudentStats.load("../_lib/data.json");
    processedData = {
      projects: {
        project1: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
      }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        3: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        satisfaction: 10
      }
    };
  });

  it("Should load JSON", () => {
    expect(statsMachine.data).toBeDefined();
    expect(statsMachine.data[0].name).toEqual("Miss Jermain Waters");
  });
});

describe("Query project query by name", () => {
  describe("when project name does not exist", () => {
    it("Should throw an error", () => {
      expect(() => statsMachine.getProjectByName("aaa")).toThrow(
        "Invalid Project Provided"
      );
    });
  });
  describe("when project name does not exist", () => {
    it("Should the correct stats", () => {
      expect(statsMachine.getProjectByName("project1")).toEqual(
        processedData.projects["project1"]
      );
    });
  });
});
