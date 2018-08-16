module.exports = (data) => {
    
    satisfactionArr = []
    for(let i = 0; i<data.length; i++){
        satisfactionArr.push(data[i].satisfaction) 
    }
    let satisfactionAvg = (satisfactionArr.reduce((a, b) => a + b))/satisfactionArr.length
   
    console.log("satisfactionAvg", typeof(satisfactionAvg))
    let demographicOutput = {
        demographics:{
            satisfaction:satisfactionAvg
        }
        
    }
    return demographicOutput
    console.log("satisfactionAvg", demographicOutput)
}