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

const find_level_averages = function (root) {
    result = [];
    let queue = [];
    queue.push(root);
    
    while (queue.length) {
        let qLen = queue.length;
        let tempValue = 0;
        for (let i = 0; i < qLen; i++) {
            let current = queue.shift();
            tempValue += current.value;

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        result.push(parseFloat(tempValue / qLen).toFixed(1));
    }

    return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
