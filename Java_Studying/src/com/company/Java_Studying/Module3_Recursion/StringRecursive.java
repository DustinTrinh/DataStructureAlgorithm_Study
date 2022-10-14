package com.company.Java_Studying.Module3_Recursion;

public class StringRecursive {

    public static String reverseString(String str){
        if(str.isEmpty()){
            return str;
        }
        else{
            return reverseString(str.substring(1)) + str.charAt(0);
        }
    }
    private static String remDuplicates(String text) {
        if (text.length() == 1) {
            return text;
        }

        if (text.substring(0,1).equals(text.substring(1,2))) {
            return remDuplicates(text.substring(1));
        }
        else {
            return text.substring(0,1) + remDuplicates(text.substring(1));
        }
    }

    public static void permutations(char[] array, int length) {
        if (length == 1) {
            System.out.println(array);
            return;
        }
        for (int i = 0; i < length; i++) {
            swap(array, i, length-1);
            permutations(array, length-1);
            swap(array, i, length-1);
        }
    }

    public static void swap(char[] array, int i, int j) {
        char c;
        c = array[i];
        array[i] = array[j];
        array[j] = c;
    }

    public static void main( String args[] ) {
        char[] input = {'a', 'b'};
        System.out.println("String reverse: " + reverseString("DustyTheCutie"));
        System.out.println("Remove Duplicate: " + remDuplicates("Whatt Iss Goingg OOn"));
        System.out.println("Permutation String: " );
        permutations(input, input.length);
    }
}
