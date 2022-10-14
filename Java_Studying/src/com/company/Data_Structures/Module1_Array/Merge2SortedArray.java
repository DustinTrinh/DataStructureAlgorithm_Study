package com.company.Data_Structures.Module1_Array;

public class Merge2SortedArray {
    public static int[] mergeArrays(int[] arr1, int[] arr2)
    {
        int[] result = new int[arr1.length + arr2.length];
        int first = 0;
        int second = 0;
        int tracker = 0;

        while(first < arr1.length && second < arr2.length){
            if(arr1[first] <= arr2[second]){
                result[tracker] = arr1[first];
                first++;
            }
            else if(arr1[first] > arr2[second]){
                result[tracker] = arr2[second];
                second++;
            }
            tracker++;
        }

        while(first < arr1.length){
            result[tracker] = arr1[first];
            tracker++;
            first++;
        }

        while(second < arr2.length){
            result[tracker] = arr2[second];
            tracker++;
            second++;
        }

        return result;
    }
    public static void main(String args[]){
        int[] arr1 = {1,12,14,17,23}; // creating a sorted array called arr1
        int[] arr2 = {11,19,27};  // creating a sorted array called arr2

        int[] resultantArray = mergeArrays(arr1, arr2); // calling mergeArrays

        System.out.print("Arrays after merging: ");
        for(int i = 0; i < arr1.length + arr2.length; i++) {
            System.out.print(resultantArray[i] + " ");
        }
    }

}
