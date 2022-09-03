class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

//Function to check if the two trees are identical
let areIdentical = function(tree1, tree2) {
	// Returns true if both trees have null as root (first base case)
	if (!tree1 && !tree2) {
		return true;
	}
	
	// Function returns false if one of the roots here is null (second base case)
	if (tree1 && tree2) {
		// Returns true if both nodes have the same left sub-tree, right sub-tree
		// and value  
			return (tree1.data === tree2.data &&
						areIdentical(tree1.left, tree2.left) &&
						areIdentical(tree1.right, tree2.right));
	}
	// Returns false if neither of the above cases is satisfied
	return false;
};

let tree1 = new TreeNode(100);
tree1.left = new TreeNode(25);
tree1.left.left = new TreeNode(50);
tree1.right = new TreeNode(100);
tree1.right.left = new TreeNode(125);
tree1.right.right = new TreeNode(350);

let tree2 = new TreeNode(100);
tree2.left = new TreeNode(25);
tree2.left.left = new TreeNode(50);
tree2.right = new TreeNode(100);
tree2.right.left = new TreeNode(125);
console.log(areIdentical(tree1, tree2))