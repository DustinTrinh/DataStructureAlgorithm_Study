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

const traverse = function (root) {
    result = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let cur = queue.shift();
        result.push(cur.val);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
