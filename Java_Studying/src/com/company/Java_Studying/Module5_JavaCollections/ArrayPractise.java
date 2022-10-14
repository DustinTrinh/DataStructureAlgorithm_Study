package com.company.Java_Studying.Module5_JavaCollections;
import java.util.Arrays;
public class ArrayPractise {
    public static void main(String args[]) {

        int[] numbers = {100, 87,65,43,2, 523,52432, 1, 10 };
        int[] numbers2 = Arrays.copyOf(numbers, numbers.length);
        //WIll be fill with 0 if size is larger than original
        int[] numbers3 = Arrays.copyOf(numbers, 20);


        System.out.println("The index of element 77 in the array is " +  Arrays.binarySearch(numbers, 100));

        Arrays.sort(numbers);

        //Better
        Arrays.parallelSort(numbers);

        for(Integer num : numbers){
            System.out.println(num);
        }
    }
}
