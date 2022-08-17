//Fast but really effective?
const find_permutation = function(str, pattern) {
    let charStorage = new Map();
    let streak = 0;
  
    for(let i = 0; i < pattern.length; i++){
      if(!charStorage[pattern[i]]){
        charStorage[pattern[i]] = 1;
      }
      else{
        charStorage[pattern[i]] += 1;
      }
    }
    let tempStorage = charStorage;
    for(let i = 0; i < str.length; i++ ){
      
      if(tempStorage[str[i]]){
        streak++;
        tempStorage[str[i]]-=1;
        if(tempStorage[str[i]] <= 0){
          delete tempStorage[str[i]];
        }
      }
      else{
        streak = 0;
        tempStorage = charStorage;
      }
      if(streak === pattern.length){
        return true;
      }
    }
  
    return streak === 0 ? false : true;
  };
  