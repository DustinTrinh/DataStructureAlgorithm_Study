//https://leetcode.com/problems/count-complete-tree-nodes/
//Complete Tree: All level are full of nodes except LAST ROW. But last row has to full to the furthest left.
//FUll tree: The Node either have 2 children or no children at all
//Space O(1 ) TIme complexity O(log^2 N) -> O(logN * logN)
function getTreeHeight(root){
    let height = 0;
    while(root.left !== null){
        height++;
        root = root.left;
    }
    return height;
}

function nodeExist(idxToFind, height, root){
    let left = 0;
    let right = Math.pow(2,height)-1;
    let count = 0;
    while(count < height){
        let midOfNode = Math.ceil((left+right)/2);
        if(idxToFind >= midOfNode){
            root = root.right;
            left = midOfNode;
        }
        else{
            root = root.left;
            right = midOfNode-1;
        }
        count++;
    }  
    return root !== null;  
}
var countNodes = function(root) {
    if(root === null) return 0;
    
    let height = getTreeHeight(root);
    if(height === 0) return 1;

    let upperCount = Math.pow(2,height)-1;
    let left = 0, right = upperCount;
    while(left < right){
        let idxToFind = Math.ceil((left+right)/2);
        if(nodeExist(idxToFind, height, root)){
            left = idxToFind;
        }
        else{
            right = idxToFind-1;
        }
    }
    return upperCount+left+1;
}; 