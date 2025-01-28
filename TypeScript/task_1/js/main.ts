// Interface for Teacher
interface Teacher {
    readonly firstName: string;  // Readonly, can only be set during initialization
    readonly lastName: string;   // Readonly, can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional property
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};


const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);

  console.log(printTeacher("John", "Doe"));

  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("Jane", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
