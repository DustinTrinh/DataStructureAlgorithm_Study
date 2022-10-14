package com.company.Studying.Module5_JavaCollections;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class Employee {

    String name;
    int age;
    String country;

    public Employee(String name, int age, String country) {
        //super();
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

class ArrayListExercise {

    public static void main(String args[]) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee("Alex", 23, "USA"));
        list.add(new Employee("Dave", 34, "India"));
        list.add(new Employee("Carl", 21, "USA"));
        list.add(new Employee("Joe", 56, "Russia"));
        list.add(new Employee("Amit", 64, "China"));
        list.add(new Employee("Ryan", 19, "Brazil"));

        System.out.println("Name of employees with age more than 50");
        for(Employee emp : list) {
            if(emp.age > 50) {
                System.out.println(emp.name);
            }
        }

        System.out.println("Sorting all the employees by country name");
        Collections.sort(list, (e1, e2) -> e1.country.compareTo(e2.country));

        for (Employee emp : list) {
            System.out.println("Employee Name: " + emp.name + ", Employee Country: " + emp.country);
        }
    }

}
