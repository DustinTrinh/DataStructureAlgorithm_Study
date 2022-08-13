//https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = merge2Arrays(nums1, nums2);
  let median = 0;
  console.log("Merged Array: " + mergedArr);
  console.log("Length: " + mergedArr.length);
  if (mergedArr.length % 2 === 0) {
    median =
      (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
      2;
    median = Math.round(median * 100) / 100;
  } else {
    median = mergedArr[Math.floor(mergedArr.length / 2)];
    median = Math.round(median * 100) / 100;
  }
  return median;
};

const merge2Arrays = (arr1, arr2) => {
  const l1 = arr1.length;
  const l2 = arr2.length;
  let i = 0;
  let j = 0;
  let result = [];
  while (i < l1 || j < l2) {
    if (i >= l1 && j < l2) {
      result.push(arr2[j]);
      j++;
    } else if (i < l1 && j >= l2) {
      result.push(arr1[i]);
      i++;
    } else if (i < l1 && j < l2) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        result.push(arr2[j]);
        i++;
        j++;
      }
    }
  }
  return result;
};

arr1 = [1, 2, 3, 4, 5, 6, 8, 100];
arr2 = [7, 90, 91, 92, 93, 94, 95];

//console.log(merge2Arrays(arr1,arr2));

nums1 = [1, 3];
nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2));
