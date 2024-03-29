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

const find_path = function (root, sequence) {
    function traverse(root, sequence, tracker = 0) {
        if (root === null) return false;
        if (tracker >= sequence.length || root.value !== sequence[tracker]) return false;
        
        if (tracker === sequence.length-1 && !root.left && !root.right) {
            return true;
        }
        

        return traverse(root.left, sequence, tracker+1) ||  traverse(root.right, sequence, tracker+1);
    }

    
    return traverse(root, sequence);
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
