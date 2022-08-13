//https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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
 * @param {number} k
 * @return {number}
 */
/* Using BFS
 var kthSmallest = function(root, k) {

    let stack = [root];
    let values = [];
    while(stack.length){
        let node = stack.pop();
        if(node){
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
            values.push(node.val);

        }  
    }
    values.sort(function(a,b) {return a-b});
    return values[k-1];
};
*/

//Iterative
var kthSmallest = function(root, k) {
    let n = 1;
    let stack = [];
    let current = root;

    while(current || stack){
        while (current){
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();

        if(n === k){
            return current.val;
        }
        else{
            n+=1;
        }
        current = current.right;
    }
};