function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

function same3(arr1, arr2){
    //sort in ascending order // For descending order change from a - b ==> b - a
    let saveArr1 = arr1.sort((a, b) => a - b);
    let saveArr2 = arr2.sort((a, b) => a - b);

    if(arr1.length != arr2.length){
        return false;
    }
    for(var i = 0; i < arr1.length; i++){
        if((saveArr1[i]**2) != saveArr2[i]){
            
            console.log((saveArr1[i]));
            console.log((saveArr1));

            console.log(saveArr2[i]);
            console.log(saveArr2);


            return false;
        }
        else{
            console.log((saveArr1[i]));
            console.log((saveArr1));

            console.log(saveArr2[i]);
            console.log(saveArr2);
        }
    }

    return true;
}

var a1 = [1,5, 2,3, 4];
var a2 = [1,25,4,9, 16];

console.log(same3(a1,a2));

