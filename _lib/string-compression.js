module.exports = (string)=>{
    // const char = string.map(char => char)    
    string.split("").replace(/[0-9]/g, "").join('')
}


