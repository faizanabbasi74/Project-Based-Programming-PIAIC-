// University Management Project in Typescript

class Person {
    name : string;
    age : number;

    constructor (name:string, age:number){
        this.name = name
        this.age = age
    }

    getName (){
        return this.name
    }
}


class Student extends Person {

    rollNumber: string;
    courses: Course[] = [];

    constructor (name:string, age:number, rollNumber:string) {
        super(name, age)
        this.rollNumber = rollNumber
    }
    registerForCourses(course:Course){
        this.courses.push(course)
    }

}

class Instructor extends Person {

    salary: number;
    courses: Course[] = [];

    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary = salary
    }

    assignCourse (course:Course){
        this.courses.push(course)
    }

}

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;

    constructor(id:string,name:string){
        this.id = id
        this.name = name
    }

    addStudent(student:Student){
        this.students.push(student)
        student.registerForCourses(this)
    }
    setInstructor(instructor:Instructor){
        this.instructor = instructor
        instructor.assignCourse(this)
    }

} 

class Department {
    name: string;
    courses: Course[] =[];

    constructor(name:string){
        this.name = name
    }

    addCourse(course:Course){
        this.courses.push(course)
    }
}
