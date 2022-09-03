class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const BFS = (root) =>{
    let result = [];
    let queue = [root];

    while(queue.length){
        let temp = queue.shift();

        result.push(temp.value);
        if(temp.left) queue.push(temp.left);
        if(temp.right) queue.push(temp.right);

    }

    return result;
}

const PreOrder_DFS = (root) => {
    let result = [];

    function dfs(root){
        result.push(root.value);
        if(root.left) dfs(root.left);
        if(root.right) dfs(root.right);
    }

    dfs(root)
    return result;
}

const Inorder_DFS = (root) => {
    let result = [];

    function dfs(root){
        if(root.left) dfs(root.left);
        result.push(root.value);
        if(root.right) dfs(root.right);
    }

    dfs(root);
    return result;
}

const PostOrder_DFS = (root) => {
    const result = [];

    function dfs(root){
        if(root.left) dfs(root.left);
        if(root.right) dfs(root.right);
        result.push(root.value);
    }
    dfs(root);
    return result;
}

let tree1 = new TreeNode(100);
tree1.left = new TreeNode(25);
tree1.left.left = new TreeNode(50);
tree1.right = new TreeNode(105);
tree1.right.left = new TreeNode(125);
tree1.right.right = new TreeNode(350);
/*
        100
    25           105 
50           125        350
*/

console.log(PostOrder_DFS(tree1))
console.log(Inorder_DFS(tree1))
console.log(PreOrder_DFS(tree1))
console.log(BFS(tree1))