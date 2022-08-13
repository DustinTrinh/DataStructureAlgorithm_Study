/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//https://leetcode.com/problems/binary-tree-level-order-traversal/
 var levelOrder = function(root) {
    if(!root){
        return [];
    } 
    else if(root.left === null && root.right === null) {
        return [[root.val]];
    }
    let current = new TreeNode();
    current = root;
    let ret = [];
    let queue = [];
    queue.push(current);
    while(queue[0]){
        let temp = [];
        let queueLength = queue.length;
        for(let i = 0; i < queueLength; i++){
            current = queue.shift();
            temp.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        
        ret.push(temp);

        
    }
    return ret;

};