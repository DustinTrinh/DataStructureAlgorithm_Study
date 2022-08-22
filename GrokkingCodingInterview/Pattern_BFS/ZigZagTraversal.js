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
        if(leftToRight){
            for(let i = 0; i < qLen; i++){
                let current = queue.shift();
                tempQueue.push(current.value);
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
            leftToRight = false;
        }
        else if(leftToRight === false){
            for(let i = 0; i < qLen; i++){
                let current = queue.shift();
                tempQueue.unshift(current.value);
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
            leftToRight = true;
        }
        
        result.push(tempQueue);
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
  