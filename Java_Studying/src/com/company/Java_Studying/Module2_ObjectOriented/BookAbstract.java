package com.company.Studying.Module2_ObjectOriented;

// Abstarct Book Class
abstract class BookAbstract {

    // Protected fields
    protected String name;
    protected String author;
    protected String price;

    // Parameterized Constructor
    public BookAbstract(String name, String author, String price) {
        this.name = name;
        this.author = author;
        this.price = price;
    }

    // Abstract method
    public abstract String getDetails();

}

// MyBook class extending Book class
class MyBook extends BookAbstract {

    // Parameterized constructor
    public MyBook(String name, String author, String price) {
        super(name, author, price); // Calling base class constructor
    }

    // Override the getDetails method of the Base Class
    public String getDetails() {
        return name + ", " + author + ", " + price;
    }

}

class Demo {

    public static void main(String args[]) {
        MyBook myBook = new MyBook("Harry Potter", "J.k. Rowling", "100");
        System.out.println(myBook.getDetails());

    }

}