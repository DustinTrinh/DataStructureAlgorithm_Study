/*
Time Complexity: O(N)
Space Complexity:O(N)
*/
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const find_successor = function (root, key) {
    let res = null;
    let queue = [];
    let tempQueue = [];
    queue.push(root);
    
    while(queue.length){
        let current = queue.shift();
        tempQueue.push(current);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        
    }
    
    for (let i = 0; i < tempQueue.length; i++) {
        if(tempQueue[i].val === key){
            res = tempQueue[i+1];
        }
    }
    return res;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let result = find_successor(root, 3);
if (result) {
    console.log(result.val);
}


root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

result = find_successor(root, 9);
if (result) {
    console.log(result.val);
}

result = find_successor(root, 12);
if (result) {
    console.log(result.val);
}
