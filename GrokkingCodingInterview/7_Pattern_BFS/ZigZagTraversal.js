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
  };
  
  
  const traverse = function(root) {
    result = [];
    let leftToRight = true;
    let queue = [];
    queue.push(root);

    while(queue.length){
        let qLen = queue.length;
        
        let tempQueue = [];
        for(let i = 0; i < qLen; i++){
            let current = queue.shift();
            if(leftToRight){
                tempQueue.push(current.value);
            }
            else{
                tempQueue.unshift(current.value);
            }
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        result.push(tempQueue);
        leftToRight = !leftToRight;
    }

    return result;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  root.right.left.left = new TreeNode(20)
  root.right.left.right = new TreeNode(17)
  console.log(`Zigzag traversal: ${traverse(root)}`)
  