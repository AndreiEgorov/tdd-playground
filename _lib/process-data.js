module.exports = data => {
  const singleProj = (data, projectNum) => {
    peoplePassed = [];
    satisfactionPassed = [];
    peopleFailed = [];
    satisfactionFailed = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][projectNum] === "pass") {
        peoplePassed.push(data[i][projectNum]);
        satisfactionPassed.push(data[i].satisfaction);
      } else {
        peopleFailed.push(data[i][projectNum]);
        satisfactionFailed.push(data[i].satisfaction);
      }
    }
    let project = {
      passed: {
        number: peoplePassed.length,
        satisfaction: parseFloat(
          (
            satisfactionPassed.reduce((a, b) => a + b) /
            satisfactionPassed.length
          ).toFixed(2)
        )
      },
      failed: {
        number: peopleFailed.length,
        satisfaction: parseFloat(
          (
            satisfactionFailed.reduce((a, b) => a + b) /
            satisfactionFailed.length
          ).toFixed(2)
        )
      }
    };
    return project;
  };

  let expSatisfaction = {};
  for (let i = 0; i < data.length; i++) {
    if (expSatisfaction[data[i].yearsExperience] === undefined) {
      expSatisfaction[data[i].yearsExperience] = {
        satisfaction: parseFloat(data[i].satisfaction.toFixed(2))
      };
    } else {
      expSatisfaction[data[i].yearsExperience] = {
        satisfaction: parseFloat(
          (
            (expSatisfaction[data[i].yearsExperience].satisfaction +
              data[i].satisfaction) /
            2
          ).toFixed(2)
        )
      };
    }
  }

  let demographicData = {};
  let allAges = [];
  let allSatisfaction = [];
  for (let i = 0; i < data.length; i++) {
    allAges.push(data[i].age);
    allSatisfaction.push(data[i].satisfaction);
  }
  avgAge = allAges.reduce((a, b) => a + b) / allAges.length;
  avgSatisfaction =
    allSatisfaction.reduce((a, b) => a + b) / allSatisfaction.length;
  demographicData.averageAge = avgAge;
  demographicData.satisfaction = avgSatisfaction;
  let projects = {
    project1: singleProj(data, "project1"),
    project2: singleProj(data, "project2"),
    project3: singleProj(data, "project3"),
    project4: singleProj(data, "project4")
  };

  let myObject = {
    projects: projects,
    experience: expSatisfaction,
    demographics: demographicData
  };
  return myObject;
};
