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























// ------------------------------------------
// module.exports = string => {
//     //    const cleanString = string.split("").filter(char => typeof(char) === "string")
//     // const cleanString = string.split("").map(char => char)
  
//     // return cleanString
//     let output = "";
//     let count = 0;
  
//     if (typeof string !== "string" || string === "") return 0;
  
//     for (let i = 0; i < string.length; i++) {
//       count++;
//       if (!string[i].match(/[a-z]/i)) return 0;
  
//       if (string[i] != string[i + 1]) {
//         output += string[i] + count;
//         count = 0;
//       }
//     }
//     return output;
//   };
  