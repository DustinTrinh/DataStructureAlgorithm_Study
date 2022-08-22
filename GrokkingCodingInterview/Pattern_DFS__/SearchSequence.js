class TreeNode {

    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_path = function(root, sequence) {
    function searchSequence(root, tempSequence, seqIndex = 0){
        
        if(root === null) return false;
        if(seqIndex > tempSequence.length) return false;
        console.log(root.val + " " + tempSequence[seqIndex])
        if(root.val === tempSequence[seqIndex] && root.left === null && root.right === null){
            return true;
        }
        else if(root.val !== tempSequence[seqIndex] && root.left === null && root.right === null){
            return false;
        }
        
        return searchSequence(root.left, tempSequence, seqIndex+1) || searchSequence(root.right, tempSequence, seqIndex+1);
    }
    return searchSequence(root, sequence);
  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
  