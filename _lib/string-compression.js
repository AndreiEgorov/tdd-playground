module.exports = string => {
 
    if(typeof string !== "string" || string === "" || !string.match(/[a-z]/ ))
    return 0

   let cleanStr = string.replace(/[\W_]/g, '')
   var count = 0 
   var newString = ''

    for(let i=0; i <cleanStr.length; i++){
       count++
        if(cleanStr[i] != cleanStr[i+1]){
            newString += cleanStr[i] + count
            count = 0

        }
        
    }
    
    return newString
};



















