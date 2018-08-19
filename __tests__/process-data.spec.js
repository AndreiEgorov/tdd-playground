const data = require("../_lib/data.json");
const dataProcessor = require("../_lib/process-data");
describe("Process Data", () => {
  let mockData = [
    {
      name: "Miss Jermain Waters",
      age: 31,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "pass",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Juliana Runte",
      age: 42,
      yearsExperience: 3,
      satisfaction: 3,
      project1: "fail",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Emmalee Daugherty",
      age: 25,
      yearsExperience: 2,
      satisfaction: 4,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    },
    {
      name: "Juliana Runte",
      age: 42,
      yearsExperience: 1,
      satisfaction: 3,
      project1: "fail",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    }
  ];

  beforeEach(() => {
    processedData = dataProcessor(mockData);
  });

    describe("Shape of processed data", () => {
      it("should generate an object with 3 keys", () => {
        expect(Object.keys(processedData)).toEqual([
          "projects",
          "experience",
          "demographics"
        ]);
      });
    });

    describe("Projects", () => {
      it("Should create an object for each project", () => {
        expect(Object.keys(processedData.projects)).toEqual([
          "project1",
          "project2",
          "project3",
          "project4"
        ]);
      });

      it("Should return how many people passed and how many failed and calculate  average satisfaction for each group", () => {
        result = processedData.projects.project1;
        expect(result).toEqual({
          passed: { number: 1, satisfaction: 2.00 },
          failed: { number: 3, satisfaction: 3.33 }
        });
      });
    });

  describe("Experience", () => {
    it("Should return the average satisfaction for all years of experience present in data", () => {
      result = processedData.experience;
      expect(result).toEqual({
        1: { satisfaction: 3 },
        2: { satisfaction: 4 },
        3: { satisfaction: 2.5 }
      });
    });
  });

    describe("Demographics", () => {
      it("Should return the average age and satisfaction for the cohort", () => {
          result =  processedData.demographics
          expect(result).toEqual({
              averageAge: 35,
              satisfaction: 3
            })
      });
    });
});
