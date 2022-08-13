//https://leetcode.com/problems/validate-binary-search-tree/
//All nodes on the left is less than all nodes on the right
var isValidBST = function(root) {
    if(root === null) return true;

    return dfs(root, -Infinity, Infinity);
};

function dfs(node, min, max){
    if(node.val <= min || node.val >= max){
        return false;
    }

    if(node.left){
        if(!dfs(node.left, min, node.val)){
            return false;
        }
    }

    if(node.right){
        if(!dfs(node.right, node.val, max)){
            return false;
        }
    }
    return true;
}
