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
        satisfaction:satisfactionPassed.reduce((a, b) => a + b) / satisfactionPassed.length
      },
      failed: {
        number: peopleFailed.length,
        satisfaction:satisfactionFailed.reduce((a, b) => a + b) / satisfactionFailed.length
      }
    };
    return project;
  };

  const singleExp = (data) => {
      allStudExperiences = []
      for(let i = 0; i<data.length; i++){
          
      }



  }



  let projects = {
    project1: singleProj(data, "project1"),
    project2: singleProj(data, "project2"),
    project3: singleProj(data, "project3"),
    project4: singleProj(data, "project4")
  };

  let myObject = {
    projects: projects,
    experience: {},
    demographics: {}
  };

  return myObject;
};













// AVG for demographic satisfaction
// satisfactionArr = []
//     for(let i = 0; i<data.length; i++){
//         satisfactionArr.push(data[i].satisfaction)
//     }
//     let satisfactionAvg = (satisfactionArr.reduce((a, b) => a + b))/satisfactionArr.length

//     console.log("satisfactionAvg", typeof(satisfactionAvg))
//     let demographicOutput = {
//         demographics:{
//             satisfaction:satisfactionAvg
//         }

//     }
//     return demographicOutput
