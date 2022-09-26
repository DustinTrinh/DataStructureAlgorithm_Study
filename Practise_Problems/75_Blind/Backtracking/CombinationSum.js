
 var combinationSum = function(candidates, target) {
    let result = [];
    let buffer = [];
    dfs(0, target);
    return result;

    function dfs(i,target){
        if(target === 0){
            return result.push(buffer.slice());
        }
        if(target < 0) return;
        if(i === candidates.length) return;
        
        buffer.push(candidates[i]);
        dfs(i, target - candidates[i]);
        buffer.pop();
        dfs(i+1, target);
    }
};
console.log(combinationSum([2,3,6,7], 7))