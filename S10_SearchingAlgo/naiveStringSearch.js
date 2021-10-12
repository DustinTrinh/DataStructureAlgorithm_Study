//Find smaller string in the bigger string

function naiveStringSearch(lString, sString){
    let j = 0;
    if(lString.length < sString.length){
        return -1;
    }
    for(let i = 0; i < lString.length; i++){
        
        if(lString[i] === sString[j]){
            j += 1;
        }
        else{
            j = 0;
        }
        if(j === sString.length){
            console.log("Found it");
            return 1;
        }
        
    }
    console.log("Nothing");

    return -1;
}

let s1 = "Dustin what on earth are you doiung ? Say something bruh";
let s2 = "doid";
naiveStringSearch(s1,s2);