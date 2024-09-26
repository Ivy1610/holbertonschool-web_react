// Interface for Teacher
interface Teacher {
    readonly firstName: string;  // Readonly, can only be set during initialization
    readonly lastName: string;   // Readonly, can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional field
    location: string;
  
    // Index signature to allow any additional properties
    [propName: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }

  // Example usage of the Teacher interface
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,  // Dynamic property
  };
  
  console.log(teacher3);
  
  // Should print:
  // Object
  // contract: false
  // firstName: "John"
  // fullTimeEmployee: false
  // lastName: "Doe"
  // location: "London"
  

  // Example usage of the Directors interface
  const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
  };

  console.log(director1);

  // Should print:
  // Object
  // firstName: "Jane"*
  // fullTimeEmployee: true
  // lastName: "Smith"
  // location: "London"
  // numberOfReports: 17

  //interface for printTeacher
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher('John', 'Doe'));

// Interface for the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of the StudentClass
const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
