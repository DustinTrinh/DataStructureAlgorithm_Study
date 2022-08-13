//Google Question
//Given an array = [2,5,1, 2 ,3,5,1,2,4];
//It should return 2
//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
//Given an array =[2,3,4,5]:
//It should return undefined

array1 = [2,5,1, 2 ,3,5,1,2,4];
array2 = [2,1,1,2,3,5,1,2,4];
array3 = [2,3,4,5];
array4 = [1,2,3,4,5,6,7,8,9,0,10,2];
array5 = [1,2,1,2,1,2,3,4,5,1];

const firstRecurNum = (arr) => {
    let map = new Set();

    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
            map.add(arr[i]);
        }
        else{
            return arr[i];
        }
    }
    return undefined;
};

const result = firstRecurNum(array5);
console.log(result);