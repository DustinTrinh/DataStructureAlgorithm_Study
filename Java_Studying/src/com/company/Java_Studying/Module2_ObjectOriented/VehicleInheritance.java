package com.company.Studying.Module2_ObjectOriented;

// Base Class Vehicle
class VehicleInheritance {

    // Private Fields
    private String make;
    private String color;
    private int year;
    private String model;

    public VehicleInheritance() {
        this.make = "";
        this.color = "";
        this.year = 0;
        this.model = "";
    }
    // Parameterized Constructor
    public VehicleInheritance(String make, String color, int year, String model) {
        this.make = make;
        this.color = color;
        this.year = year;
        this.model = model;
    }

    // public method to print details
    public void printDetails() {
        System.out.println("Manufacturer: " + make);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
        System.out.println("Model: " + model);
    }

}

// Derived Class Car
class Car extends VehicleInheritance {

    // Private Fields
    private String make;
    private String color;
    private int year;
    private String model;
    private String bodyStyle;

    // Parameterized Constructor
    public Car(String make, String color, int year, String model, String bodyStyle) {
        this.make = make;
        this.color = color;
        this.year = year;
        this.model = model;
        this.bodyStyle = bodyStyle;
    }
    public void printDetails() {
        System.out.println("Manufacturer: " + make);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
        System.out.println("Model: " + model);
    }
    public void carDetails() {  //details of car
        printDetails();         //calling method from parent class
        System.out.println("Body Style: " + bodyStyle);
    }

}