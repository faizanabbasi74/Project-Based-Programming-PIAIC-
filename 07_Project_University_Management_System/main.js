"use strict";
// University Management Project in Typescript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
