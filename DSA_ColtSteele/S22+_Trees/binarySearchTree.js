//https://cs.slides.com/colt_steele/trees
//https://visualgo.net/en/bst
//Insert & Searching: O(logn)
//DFS vsa BFS: Time complexity are the same, but Space complexity -> Depends     

class Node {
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
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;

        while(current !== null && !found){
            if(value < current.value){
                current = current.left;
            }
            else if(value > current.value){
                current = current.right;
            }
            else{
                found = true;
                return true;
            }
        }
        return false;
    }
    //breadth first search -> Search horizontally
    BFS(){
        let data = [];
        let queue = [];
        let node = this.root;

        queue.push(node);
        while(queue.length !== 0){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    //Deapth first search Pre order. Saving data from the top to the bottom left and then right until null. (TRAVERSE FROM ROOT TO LEFT TO RIGHT)
    DFS_Preorder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    //Deapth first search Pre order. Saving data from the bottom to the top left and then right until null. (NOT VISITNG THE ROOT UNTIL VERY LAST)
    DFS_Postorder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    //Deapth first search Inorder. Saving data from the bottom to the top left and then right until null. (WILL VISIT ROOT AFTER FINISHED WITH THE LEFT SIDE)
    DFS_Inorder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
            
        }
        traverse(this.root);
        return data;
    }
}


let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(2);

/*
        9
    4           20  
2       6   15       170
*/
console.log(tree.BFS());
console.log(tree.DFS_Preorder());
console.log(tree.DFS_Inorder());
console.log(tree.DFS_Preorder());