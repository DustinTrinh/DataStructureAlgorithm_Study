class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const find_path = function (root, sequence) {
    if (!root) return false;
    //Length of sequence
    let elementCounter = sequence.length;
    //Track the indexes
    let tracker = 0;
    let result = false;

    function traverse(root, sequence) {
        //console.log(root.value + " " + sequence[tracker] + " " + tracker)
        if (tracker === elementCounter - 1 && !root.left && !root.right) {
            result = true;
            return;
        }

        if (root.value === sequence[tracker]) {
            tracker++;
        } else {
            result = false;
            return;
        }

        if (root.left) traverse(root.left, sequence);
        if (root.right) traverse(root.right, sequence);
    }

    traverse(root, sequence);
    return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 5])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 0, 5])}`);
