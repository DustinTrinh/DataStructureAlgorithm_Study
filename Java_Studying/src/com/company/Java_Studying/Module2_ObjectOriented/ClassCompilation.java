package com.company.Java_Studying.Module2_ObjectOriented;

public class ClassCompilation {
    public static void main(String[] args) {
        SimpleCarClass car1 = new SimpleCarClass("#128593", "Corvette XLR", "red");
        Car elantraSedan = new Car("Hyundai", "Red", 2019, "Elantra", "Sedan"); //creation of car Object


        //Dealing with Private
        car1.setPrice(25000.0);
        System.out.println("Price: " + car1.getPrice());

        //Dealing with Public
        car1.totalSeat = 8;
        System.out.println("Total Seat: " + car1.totalSeat);

        //Dealing with Static
        System.out.println("Purpose: " + SimpleCarClass.purpose);

        //Print Car Details
        car1.printCarDetails();

        elantraSedan.carDetails(); //calling method to print details
    }
}
