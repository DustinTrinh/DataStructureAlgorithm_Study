/*
Time Complexity: O(logN)
Space Complexity:O(1)
*/
const search_next_letter = function (letters, key) {
    // TODO: Write your code here
    if(key > letters[letters.length-1]) return letters[0];
    let left = 0;
    let right = letters.length-1;
    let mid = 1;

    while(letters[mid] !== key && left <= right){
        mid = Math.floor((left+right)/2);
        if(letters[mid] < key){
            left = mid + 1;
        }
        else if(letters[mid] > key){
            right = mid-1;
        }
        else{
            if(mid+1 >= letters.length){
                return letters[0];
            }
            else{
                return letters[mid+1];
            }
        }
        
    }

    return letters[left];
};

console.log(search_next_letter(["a", "c", "f", "h"], "f"));
console.log(search_next_letter(["a", "c", "f", "h"], "b"));
console.log(search_next_letter(["a", "c", "f", "h"], "m"));
