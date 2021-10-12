//WRITE IT OUT AND COME BACK LATER
function charCount(str){
    //Make variable to return
    var result = {};
    var valid = /[a-z0-9]/;
    //loop through the string
    for(var i = 0; i < str.length; i++){
        var character = str[i];
        if(result[character] > 0){
            result[character]++;
        }
        else if(valid.test(character)){
                result[character] = 1;
        }
    }
    return result;

}
var stringg = "ABC Nope Not Thot";
console.log(charCount(stringg));