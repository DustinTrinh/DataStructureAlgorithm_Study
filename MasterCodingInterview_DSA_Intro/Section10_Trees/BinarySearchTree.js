class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        let current;
        if(this.root === null){ 
            this.root = newNode; 
            return this;}
        else{
            current = this.root;
        }
        
        while(true){
            if(current.value === value) return undefined;

            if(current.value < value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else{
                if(current.right === null){
                    current.right = newNode;
                    return this
                }
                current = current.right;
            }
        }
    }

    lookup(val){
        if(this.root === null) return false;
        let found = false;
        let current = this.root;

        while(current !== null && !found){
            if(current.value > val){
                current = current.right;
            }
            else if(current.value < val){
                current = current.left;
            }
            else{
                found = true;
                return found;
            }
        }
    return found;   
    }

    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(11);

const result = tree.lookup(12);
console.log(result);