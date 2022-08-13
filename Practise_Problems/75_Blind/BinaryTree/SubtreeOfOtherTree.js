//https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

/*
Do a DFS, go thru all nodes, if Value is the same, check with the function same tree. 
If true, just return it.
*/
 var isSubtree = function (root, subRoot) {
    if(!root && !subRoot) return true;
    let storeTree = [root]
    let result = false;
    while(storeTree.length){
        let node = storeTree.pop();
        
        if(node !== null){
            if(node.val === subRoot.val){
                result = isSameTree(node, subRoot);
                if(result === true){
                    return result;
                }
            }   
            storeTree.push(node.left);
            storeTree.push(node.right);
        }
        
    }
    return result;
};

const isSameTree = (t1, t2) => {
    if(!t1 && !t2) return true;
    if(!t1 || !t2 || t1.val !== t2.val) return false;

    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}