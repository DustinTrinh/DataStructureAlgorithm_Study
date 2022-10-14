package com.company.Java_Studying.Module2_ObjectOriented;

public class SimpleCarClass {
    //PUBLIC Can be access with the instance
    public int totalSeat;

    //PRIVATE Cannot be access, need Getter and Setter
    private double price;

    //STATIC means can be access without instance of Car WITHIN PACKAGE
    static String purpose = "Ride for Fun";

    private String id;
    private String name;
    private String color;

    //DEFAULT is PROTECTED, can be access via inheritance
    int topSpeed;
    int feulCapacity;
    String manufacturer;

    public SimpleCarClass(){

    }

    public SimpleCarClass(String id, String name, String color){
        this.id = id;
        this.name = name;
        this.color = color;
    }

    //FINAL cannot be changed
    final String destroyed = "Nope";

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    void refeul(){

    }

    void park(){

    }

    void drive(){

    }

    void printCarDetails(){
        System.out.println("Car ID: " + this.id + "\n" +
                            "Car Name: " + this.name + "\n" +
                            "Car Color: " + this.color + "\n" +
                            "Car Seat " + this.totalSeat + "\n"   +
                            "Car Price: " + this.price + "\n");
    }
}
