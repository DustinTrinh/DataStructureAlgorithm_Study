package com.company.Java_Studying.Module5_JavaCollections;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class HashMapPractise {
    public static void main(String args[]) {

        Map<String, Integer> stockPrice = new HashMap<>();

        stockPrice.put("Fiserv", 117);
        stockPrice.put("BMW", 73);
        stockPrice.put("Audi", 99);
        stockPrice.put("Microsoft", 213);
        stockPrice.putIfAbsent("Oracle", 70); //Inserting share price of Oracle again using putIfAbsent() method. This will not update the value.

        Set<String> keys = stockPrice.keySet();
        Collection<Integer> values = stockPrice.values();

        System.out.println(stockPrice);
        System.out.println(stockPrice.get("Google")); //This will return null.
        System.out.println(stockPrice.remove("Oracle"));
        // This will replace the value of Fiserv as current value does not matter.
        stockPrice.replace("Fiserv", 100);
        System.out.println(stockPrice.containsKey("Oracle"));
        System.out.println(stockPrice.containsValue(73));

        System.out.println(keys);
        System.out.println(values);

        System.out.println(stockPrice.isEmpty());

        // This will increment the value of India by 1 as it is present in the Map
        stockPrice.compute("Audi", (k, v) -> v == null ? 10 : v + 1);

        // This will insert Vietnam in the Map with default value of 10.
        stockPrice.compute("BMW", (k, v) -> v == null ? 10 : v + 1);

        stockPrice.computeIfAbsent("Cadillac", k -> 200);
        System.out.println(stockPrice);
    }
}
