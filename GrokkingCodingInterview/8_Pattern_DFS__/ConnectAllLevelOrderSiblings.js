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

    // tree traversal using 'next' pointer
    print_tree() {
        result = "Traversal using 'next' pointer: ";
        current = this;
        while (current != null) {
            result += current.value + " ";
            current = current.next;
        }
        console.log(result);
    }
}

function connect_all_siblings(root) {
    if (root === null) {
        return;
    }
    const queue = new Deque();
    queue.push(root);
    let currentNode = null,
        previousNode = null;
    while (queue.length > 0) {
        currentNode = queue.shift();
        if (previousNode !== null) {
            previousNode.next = currentNode;
        }
        previousNode = currentNode;
        // insert the children of current node in the queue
        if (currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            queue.push(currentNode.right);
        }
    }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();
