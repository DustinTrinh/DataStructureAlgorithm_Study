/*
Time Complexity: O(N)
Space Complexity:O(N)
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function hasPath(root, sum) {
    if (root === null) {
        return false;
    }

    function dfs(root, sum){
        if(!root) return false;
        if(!root.left && !root.right && root.val === sum) return true;


        return dfs(root.left, sum - root.val) || dfs(root.right, sum - root.val);

    }

    return dfs(root,sum);
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);
