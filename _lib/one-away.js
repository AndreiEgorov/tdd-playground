module.exports = (strone, strtwo) => {

    if ( typeof(strone)!=="string" || typeof(strtwo)!=="string") return 0;
    const str1 = strone.split('').length
    const str2 = strtwo.split('').length

    let arrwordLong
    let arrwordShort

    if(str1 >= str2){
        arrwordLong = strone.split('').sort()
        arrwordShort = strtwo.split('').sort()
        
    }else{
        arrwordShort = strone.split('').sort()
        arrwordLong = strtwo.split('').sort()
    }
    let difference = []
    for(let i=0; i<arrwordLong.length; i++){
        if(!arrwordShort.includes(arrwordLong[i])){
            difference.push(arrwordLong[i])
        }
    }
    if(difference.length > 1){
        return false
    }else if(difference.length = 1) return true
}