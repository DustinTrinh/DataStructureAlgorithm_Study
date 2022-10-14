package com.company.Studying.Module5_JavaCollections;

import java.util.HashSet;
import java.util.Set;

public class HashSetPractise {
    public static void main(String args[]) {
        Set<Integer> set = new HashSet<>();
        set.add(48);
        set.add(12);
        set.add(55);
        set.add(23);
        set.add(34);
        set.add(56);
        set.remove(56);
        System.out.println("Does Set contain element?: " + set.contains(99));
        System.out.println("Print Set: " + set);

        for(int i : set) {
            System.out.println(i);
        }
        //set.forEach(System.out::println);

        set.clear();
        System.out.println(set.isEmpty());

    }
}
