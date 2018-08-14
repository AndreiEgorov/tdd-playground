module.exports =(string) =>{
    if(typeof (string) === "string"){
        return true
    } else if(string.toLowerCase().split("").replace(/[\W_]/g, '').reverse().join("") === string){
        return true
    }
}




       