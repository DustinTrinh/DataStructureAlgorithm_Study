//https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    if(root === null) return [];
    let result = [];
    let queue = [root];

    while(queue.length !== 0){
       let length = queue.length;
       let count = 0;
       let currentLevelValues = [];
       while(count < length){
           const currentNode = queue.shift();
           currentLevelValues.push(currentNode.value);
           if(currentNode.left) queue.push(currentNode.left);
           if(currentNode.right) queue.push(currentNode.right);
           count++;
       }
       result.push(currentLevelValues);
    }
    return result;  
};