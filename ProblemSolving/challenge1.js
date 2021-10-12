function sameFrequency(a , b){
    let aS = a.toString().split('').sort().join('');
    let bS = b.toString().split('').sort().join('');
    
    if(aS.length != bS.length){
        return false;
    }
    
    for(let i in aS){
        if(aS[i] != bS[i]){
            return false;
        }
    }
    
    return true;
  }

  function areThereDuplicates(...args) {
    // Two pointers
    args.sort();
    
    console.log(args)
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  function averagePair(arr, val){
    let newVal = val * 2;
    let begin = 0;
    let end = arr.length - 1;
    
    while(begin < end){
        if((arr[begin] + arr[end]) > newVal){
            end--;
        }
        else if ((arr[begin] + arr[end]) < newVal) {
            begin++;
        }
        else{
            return true;
        }
        console.log(arr[begin] + " " + arr[end] + " " + newVal );
    }
    return false;
  }

  function minSubArrayLen(arr, val){
    let aS = arr.sort((a,b) => a-b);
    let end = arr.length - 1;
    let counter = 2;
    let start = end-1;
    let sum = aS[end];
    
    
    if(sum >= val){
        return 1;
    }
    
    while(start > -1){
      
        sum += aS[start];
        if( sum < val){
            counter++;
             start--;
        }
        else{
            console.log(sum + " " + val + " " + counter);
            return counter;
        }
    }
    
    return 0;
    
}