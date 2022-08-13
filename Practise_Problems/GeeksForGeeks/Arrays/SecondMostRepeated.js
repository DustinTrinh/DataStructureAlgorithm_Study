//https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1
function secFrequent(arr,n){
    //code here
    let sKey = "";
    let sVal = 0;
    let hKey = "";
    let hVal = 0;
    let storage = new Map();
    for(let i = 0; i < n; i++){
        if(!storage.has(arr[i])){
            storage.set(arr[i], 1);
        }
        else{
            storage.set(arr[i], storage.get(arr[i])+1);
        }
    }

    storage.forEach((value, key) =>{
        if(value > hVal){
            sKey = hKey;
            sVal = hVal

            hVal = value;
            hKey = key;
        }
        else if(value > sVal){
            sKey = key;
            sVal = value;
        }
    });
    return sKey;
}

arr = ['aaa', 'bbb', 'ccc', 'bbb', 'aaa', 'aaa'];
a2 = ['xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'xzfxmffa', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw', 'rylllkw']
res=secFrequent(a2, a2.length);
console.log(res)