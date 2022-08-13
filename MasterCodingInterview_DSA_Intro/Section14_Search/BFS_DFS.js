/*
Both are O(n)
BFS: Best to find shortest Path. Easier to look for Closer Nodes. BUT use more Memory
DFS: Answer Does the path exist. Use less memory. BUT can get slow.

1.If you know a solution is not far from the root of the tree:
BFS
2.If the tree is very deep and solutions are rare, 
BFS (DFS will take long time. )
3.If the tree is very wide:
DFS (BFS will need too much memory)
4.If solutions are frequent but located deep in the tree
DFS
5.determining whether a path exists between two nodes
DFS
6.Finding the shortest path
BFS
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let current;
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      current = this.root;
    }

    while (true) {
      if (current.value === value) return undefined;

      if (current.value < value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  lookup(val) {
    if (this.root === null) return false;
    let found = false;
    let current = this.root;

    while (current !== null && !found) {
      if (current.value > val) {
        current = current.right;
      } else if (current.value < val) {
        current = current.left;
      } else {
        found = true;
        return found;
      }
    }
    return found;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length !== 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  //Deapth first search Pre order. Saving data from the top to the bottom left and then right until null. (TRAVERSE FROM ROOT TO LEFT TO RIGHT)
  DFS_Preorder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  //Deapth first search Pre order. Saving data from the bottom to the top left and then right until null. (NOT VISITNG THE ROOT UNTIL VERY LAST)
  DFS_Postorder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  //Deapth first search Inorder. Saving data from the bottom to the top left and then right until null. (WILL VISIT ROOT AFTER FINISHED WITH THE LEFT SIDE)
  DFS_Inorder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

const result = tree.lookup(170);
const res2 = tree.BreadthFirstSearch();
console.log(res2);
