function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
    // Write your code here
    let result = [];
    function sortFunc(a,b){
        if(a[0] === b[0]){
            return 0;
        }
        else{
            return (a[1] < b[1]) ? -1 : 1;
        }
    }
    
    forwardRouteList.sort(sortFunc);
    returnRouteList.sort(sortFunc);

    for(let i = 0; i < forwardRouteList.length; i++){
        for(let j = returnRouteList.length-1; j >= 0; j--){
            if((forwardRouteList[i][1] + returnRouteList[j][1]) <= maxTravelDist){
                console.log(forwardRouteList[i][1] + " " + returnRouteList[j][1]);
                var route = [forwardRouteList[i], returnRouteList[j]];
                result.push(route);
            }
        }
    }
    return result;
}

maxTravelDist = 10000;
forwardRouteList = [[1,3000], [2,5000], [3,7000], [4,10000]];
returnRouteList = [[1,2000], [2,3000], [3,4000], [4,5000]];
console.log(routePairs(maxTravelDist, forwardRouteList, returnRouteList));