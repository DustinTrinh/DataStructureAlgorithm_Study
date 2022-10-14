package com.company.Studying.Module5_JavaCollections;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class ArrayListPractise {

    public static void main(String[] args){
        List<Integer> list1 = new ArrayList<>();
        list1.add(10);
        list1.add(27);
        list1.add(23);

        List<Integer> list2 = new ArrayList<>();
        list2.add(40);
        list2.add(5);
        list2.add(64);
        list2.add(10);
        list2.set(list2.size()-1, 7);

        List<String> list3 = new ArrayList<>();
        list3.add("DustyTheCutie");
        list3.add("SherryTheCutie");

        //param 1 is index, param 2 is single element
        list1.add(0,0);

        //Param 1 is index, param 2 is collection
        list1.addAll(list1.size(), list2);
        System.out.println("Append 2 array list: " + list1);

        list1.remove(1);  // This will remove the element at index 1 i.e 20.
        System.out.println("After remove index 1: " + list1);

        list1.remove(new Integer(5)); // This will remove num from the list
        System.out.println("Remove specific number: " + list1);

        System.out.println("Check if specific number exist: " + list1.contains(6));

        /* Iterate thru arraylist
        for (int i = 0; i < list1.size(); i++) { //Simple for loop
            System.out.println(list1.get(i));
        }

        for (Integer i : list1) {   //Enhanced for loop
            System.out.println(i);
        }
         */

        list2.clear();
        list3.replaceAll((element) -> element.toUpperCase());

        System.out.println("Upper Case all elements: " + list3);

        //Sort
        Collections.sort(list1);
        System.out.println("Sort ArrayList Ascending Order: " + list1);
        Collections.sort(list1, Collections.reverseOrder());
        System.out.println("Sort ArrayList Descending Order: " + list1);
    }
}
