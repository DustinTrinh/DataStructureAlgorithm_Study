package com.company.Studying.Module5_JavaCollections;

import java.util.Comparator;
import java.util.TreeSet;

public class TreeSetPractise {
    public static void main(String args[]) {
        TreeSet<Integer> set = new TreeSet<>();
        set.add(21);
        set.add(32);
        set.add(44);
        set.add(11);
        set.add(54);
        System.out.println("TreeSet elements in ascending order " + set);
        System.out.println("Fetching the first element in TreeSet " + set.first());
        System.out.println("Fetching the last element in TreeSet " + set.last());
        System.out.println("Fetching all the elements less than 40 " + set.headSet(40));
        System.out.println("Fetching all the elements greater than 40 " + set.tailSet(40));
        System.out.println("Removing 44 from TreeSet " + set.remove(new Integer(44)));
        System.out.println("Removing 100 from TreeSet " + set.remove(new Integer(100)));

        // This TreeSet will store the elements in reverse order.
        TreeSet<Integer> reverseSet = new TreeSet<>(Comparator.reverseOrder());
        reverseSet.add(21);
        reverseSet.add(32);
        reverseSet.add(44);
        reverseSet.add(11);
        reverseSet.add(54);
        System.out.println("TreeSet elements in descending order " + reverseSet);
    }
}
