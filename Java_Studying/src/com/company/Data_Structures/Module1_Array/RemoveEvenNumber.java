package com.company.Data_Structures.Module1_Array;

public class RemoveEvenNumber {

    public static int[] removeEven(int[] arr) {
        int countEven = 0;

        for(int i = 0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                countEven++;
            }
        }
        int[] resultArray = new int[arr.length - countEven];
        int tracker = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] % 2 != 0){
                resultArray[tracker] = arr[i];
                tracker++;
            }
        }

        return resultArray; // change this and return the correct result array
    }

    public static void main(String args[]){
        int[] arr = {1, 2, 4, 5, 10, 6, 3};
        int[] arrResult = removeEven(arr);

        for(Integer num: arrResult){
            System.out.println(num);
        }

    }
}
