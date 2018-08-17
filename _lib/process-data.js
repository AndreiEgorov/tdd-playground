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
        satisfaction:parseFloat((satisfactionPassed.reduce((a, b) => a + b) / satisfactionPassed.length).toFixed(2))
      },
      failed: {
        number: peopleFailed.length,
        satisfaction:parseFloat((satisfactionFailed.reduce((a, b) => a + b) / satisfactionFailed.length).toFixed(2))
      }
    };
    return project;
  };
    
let expSatisfaction = {}
for(let i = 0; i<data.length; i++){
    console.log("Satisfaction 1",expSatisfaction[data[i].yearsExperience])
    if(expSatisfaction[data[i].yearsExperience]=== undefined){
        (expSatisfaction[data[i].yearsExperience] = {"satisfaction":parseFloat((data[i].satisfaction).toFixed(2))})
    }else{
        expSatisfaction[data[i].yearsExperience] = {"satisfaction":parseFloat(((expSatisfaction[data[i].yearsExperience].satisfaction+data[i].satisfaction)/2).toFixed(2))}
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
    experience: expSatisfaction,
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
