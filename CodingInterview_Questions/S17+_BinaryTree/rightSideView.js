//https://leetcode.com/problems/binary-tree-right-side-view/
//Space O(Height) and time complexity 0(n)

function dfs(node, currentLevel, result){
    if(!node) return;
    if(currentLevel >= result.length){
        result.push(node.val);
    }
    if(node.right){
        dfs(node.right, currentLevel+1, result);
    }
    if(node.left){
        dfs(node.left, currentLevel+1, result);
    }
}
var rightSideView = function(root) {
    let result = [];

    dfs(root, 0, result);
    return result;
};