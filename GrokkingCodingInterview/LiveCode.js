/*
You are on a natural language processing team that is doing an analysis of a new language.
Your job is to find the top N words in the language that are paired with other words to form
compound words in the language.
Clarifications:
- Compound word: word made up of two words, just two words
- No duplicate words in the language
Input:
language = [thunder, rain, thunderstorm, storm, rainstorm, rainbow]
N = 3
Output:
storm, thunder, rain
*/

function findCoumpoundWords(arr, N){
    let storeMap = new Map();
    
    for(let i = 0; i < arr.length; i++){
        if(!storeMap.get(arr[i])){
            storeMap.set(arr[i], 0);
        }
    }
    
    for(let i = 0; i < arr[i]; i++){
        let temp = arr[i];
        let temp2 = "";
        
        for(let j = 0; j < temp.length; j++){s
            temp2 = temp2.concat(temp[j]);
            
            if(storeMap.has(temp2)){
                let second = temp.slice(j).join('');
                
                if(storeMap.has(second)){
                    storeMap.set(temp2, storeMap.get(temp2) + 1);
                    storeMap.set(temp2, storeMap.get(second) + 1);
                }
            }
        }
    }
    
    // Sort array of words in N(logN) and return top words
}

                                                                                                                   