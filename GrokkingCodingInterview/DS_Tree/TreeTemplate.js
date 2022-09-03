class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

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