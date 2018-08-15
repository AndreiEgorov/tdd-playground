module.exports = (data) => {
    console.log("BNBNNANE", data)
    satisfactionArr = []
    for(let i = 0; i<data.length; i++){
        satisfactionArr.push(data[i].satisfaction) 
    }
    let satisfactionAvg = (satisfactionArr.reduce((a, b) => a + b))/satisfactionArr.length
    console.log("satisfactionAvg", typeof(satisfactionAvg))
    return satisfactionAvg

}