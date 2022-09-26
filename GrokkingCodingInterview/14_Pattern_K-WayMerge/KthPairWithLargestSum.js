/*
Time Complexity: O(K * K logK)
Space Complexity:O(K)
*/

const Heap = require("../../node_modules/collections/heap"); //http://www.collectionsjs.com

const find_k_largest_pairs = function (nums1, nums2, k) {
    result = [];
    let maxHeap = new Heap([], null, ((a,b) => a[1] - b[1]));

    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            maxHeap.push([[nums1[i], nums2[j]], nums1[i] + nums2[j]]);
        }
    }

    for(let i = 0; i < k; i++){
        let entries = maxHeap.pop();
        result.push(entries[0]);
    }
    return result;
};

process.stdout.write('Pairs with largest sum are: ');
const result1 = find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3);
result1.forEach((a) => {
  process.stdout.write(`[${a[0]}, ${a[1]}] `);
});
