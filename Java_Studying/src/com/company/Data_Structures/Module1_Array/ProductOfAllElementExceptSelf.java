package com.company.Data_Structures.Module1_Array;

public class ProductOfAllElementExceptSelf {

    public static int[] findProduct(int arr[])
    {
        int [] result = new int[arr.length];

        for(int i= 0; i < arr.length; i++){
            int tempProduct = 1;
            for(int j = 0; j < arr.length; j++){
                if(i != j){
                    tempProduct *= arr[j];
                }
            }
            result[i] = tempProduct;
        }

        return result;
    }
    public static void main(String[] args){

    }
}
