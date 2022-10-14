package com.company.Studying.Module1_Syntax;

import java.util.Arrays;

public class A_BasicJavaSyntax {
    public static int squareInt(int x){
        return x*x;
    }

    public static void StringPlaying(){
        String str = String.valueOf(12);
        char c = str.charAt(0);
        String str1 = "DustyTheCutie";
        System.out.println("These are the numbers from String: " + str);
        System.out.println(str1.length());
        System.out.println(str1.toUpperCase());

        System.out.println("The character at index 5 is: " + str1.charAt(5));
    }

    public static void NumbersPlaying(){
        System.out.println("The square of the numbers: " + squareInt(10));
        System.out.format("My favorite number is %.3f.\n", 3.141592654);
    }

    public static void ArrayPlaying(){
        int[] intTest = {1,5,6,3,3,6,423,6,56,3,6,0};
        Arrays.sort(intTest);
        System.out.println(intTest[1]);
        System.out.println(Arrays.toString(intTest));
    }

    public static void ForEachPlaying(){
        int[] primes = {2, 3, 5, 7, 11, 13};
        for(int p: primes) {
            System.out.println(p);
        }
    }

    public static void ForPlaying(){
        int[] primes = {2, 3, 5, 7, 11, 13};
        for(int i = 0; i < primes.length; i++) {
            System.out.println(primes[i]);
        }
    }

    public static void main(String []args){
        int i1 = 1;
        float f1 = 1;
        double d1 = 2.0;
        int[] testArray = new int[20];
        System.out.println(testArray.length);
        //NumbersPlaying();
        //StringPlaying();
        //ArrayPlaying();
        //ForPlaying();
        //ForEachPlaying();


        /*
        Java can exit prematurely and indicate success or failure to the operating system using
        System.exit(). Even if you don’t care about the resulting value, System.exit() is occasionally
        useful for debugging, or for terminating a program early for other reasons.
        force quit the program, making the code
        0 available to the operating system.
        (0 traditionally indicates success.)
         */
        System.exit(0);
    }
}
