/*
Time Complexity: O(N)
Space Complexity:O(N)
*/
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const find_minimum_depth = function (root) {
    if (!root) return -1;

    let result = 0;
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let qLen = queue.length;
        result++;

        for (let i = 0; i < qLen; i++) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (!current.left && !current.right) {
                return result;
            }
        }
    }

    return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
