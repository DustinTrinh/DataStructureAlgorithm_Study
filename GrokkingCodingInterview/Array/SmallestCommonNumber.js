/*
Time complexity O(n)
Space complexity O(1)

*/
let findLeastCommonNumber = function (arr1, arr2, arr3) {
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    
    while (a1 < arr1.length && a2 < arr2.length && a3 < arr3.length) {
        if (arr1[a1] === arr2[a2] && arr2[a2] === arr3[a3]) return arr1[a1];

        if (arr1[a1] <= arr2[a2] && arr1[a1] <= arr3[a3]) {
            a1++;
        } else if (arr2[a2] <= arr1[a1] && arr2[a2] <= arr3[a3]) {
            a2++;
        } else if (arr3[a3] <= arr1[a1] && arr3[a3] <= arr2[a2]) {
            a3++;
        }
    }
    return -1;
};
