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

const find_sum_of_path_numbers = function (root) {
    if (!root) return -1;

    let result = 0;
    function traverse(root, currentValue = 0) {
        currentValue += root.value;
        console.log(currentValue)

        if(root.left || root.right){
            currentValue *= 10;
        }
        else{
            result += currentValue;
        }
        if(root.left) traverse(root.left, currentValue);
        if(root.right) traverse(root.right, currentValue);
        
    }

    traverse(root);
    return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
