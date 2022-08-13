class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `My full name is ${this.firstName} ${this.lastName}, ${this.age} years old.`;
    }

    static enrollStudents(...students){
        console.log("This is static func");
        console.log(students);
    }
}

let firstStudent = new Student("Dustin", "Trinh", 23);
let secondStudent = new Student("Sherry", "Trinh", 22);
console.log(firstStudent.fullName());
Student.enrollStudents(firstStudent, secondStudent);