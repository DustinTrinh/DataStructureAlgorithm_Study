//DFS Traversal in 2D Array
//From UP -> RIGHT -> DOWN sequence from left to right

//UP, RIGHT, DOWN, LEFT
const direction = [[-1,0],[0,1], [1,0], [0,-1]];

function traversalDFS(matrix){
    const seen = new Array(matrix.length).fill(0).map(()=> new Array(matrix[0].length).fill(false));
    const values = [];
    dfs(matrix, 0, 0, seen, values);
    console.log
    return values;
}

function dfs(matrix, row, col, seen, values) {
    if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
    
    seen[row][col] = true;
    values.push(matrix[row][col]);
  
    for(let i = 0; i < direction.length; i++) {
      const currentDir = direction[i];
      dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
    }
    return values; 
}

//BFS 
//Same pattern but keep expanding from 1 point and spread out. 
const traversalBFS = function(matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
  
    const values = [];
  
    const queue = [[0, 0]];
  
    while(queue.length) {
      const currentPos = queue.shift();
      const row = currentPos[0];
      const col = currentPos[1];
      
      if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
        continue;
      }
  
      seen[row][col] = true;
      values.push(matrix[row][col]);
      
      for(let i = 0; i < direction.length; i++) {
        const currentDir = direction[i];
        queue.push([row + currentDir[0], col + currentDir[1]]);
      }
    }
  
    return values;
  }

const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ];
  
console.log(traversalDFS(testMatrix));
console.log(traversalBFS(testMatrix));