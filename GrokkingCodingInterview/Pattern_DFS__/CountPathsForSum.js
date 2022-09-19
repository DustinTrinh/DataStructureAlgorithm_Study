/*
Time Complexity: Worst: O(N^2) / Best O(NlogN)
Space Complexity:O(N)
*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const count_paths = function(root, S) {
    let counter = 0;

    function dfs(root, S, currentPath = []){
        
        currentPath.push(root.value);
        let tempSum = 0;
        for(let i = currentPath.length -1; i >= 0;i--){
            tempSum += currentPath[i];

            if(tempSum === S){
                counter++;
            }
        }

        if(root.left) dfs(root.left, S, currentPath);
        if(root.right) dfs(root.right, S, currentPath);

        currentPath.pop();
    }
    dfs(root, S);
    return counter;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Tree has paths: ${count_paths(root, 11)}`)
  