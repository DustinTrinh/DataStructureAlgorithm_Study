package com.company.Studying.Module3_Recursion;

public class NumbersRecursive {

    private static int factorial(int num){
        if(num == 1) return 1;

        else{
            return (num * factorial(num-1));
        }
    }

    private static int fibonacci(int num){
        if(num < 2) return num;

        return fibonacci(num-1) + fibonacci(num-2);
    }

    private static int sumAllTo1(int num){
        if(num == 1) return num;

        return num + sumAllTo1(num-1);
    }

    public static int greatestCommonDivisor(int num1, int num2) {
        // Base case
        if (num1 == num2) {
            return num1;
        }
        // Recursive case
        if (num1 > num2) {
            return greatestCommonDivisor(num1-num2, num2);
        }
        else {
            return greatestCommonDivisor(num1, num2-num1);
        }
    }

    public static void main( String args[] ) {
        // Calling from main

        //Recursion With Numbers
        System.out.println("Factorial : " + factorial(5));
        System.out.println("Fibonacci : " + fibonacci(10));
        System.out.println("Sum From N to 1 : " + sumAllTo1(10));
        System.out.println("Greatest Common Divisor : " + greatestCommonDivisor(36,54));
    }
}
