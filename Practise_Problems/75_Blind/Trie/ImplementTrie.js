//https://leetcode.com/problems/implement-trie-prefix-tree/
class Trie {
    constructor() {
      this.root = {};
      this.endOfWord = false;
    }
  
    insert(word) {
        let current = this.root;
        
        for(let character of word){
            if(current[character] == null){
                current[character] = {};
            }
            current = current[character];
        }
        current.endOfWord = true;
    }
  
    search(word) {
        let current = this.root;
        
        for(let character of word){
            current = current[character];
            if(current === null) return null;
        }
        return current.endOfWord === true && current != null;
    }
  
    startsWith(prefix) {
        let current = this.root;
        if(current === null) return null;
        for(let character of prefix){
            current =  current[character];
            if(current === null) return null;
        }
        return true;
    }
  }


let word = "apple";
let prefix = "ap";
var obj = new Trie();
obj.insert(word);
var param_2 = obj.search(word);
var param_3 = obj.startsWith(prefix);

console.log(param_2)
console.log(param_3)