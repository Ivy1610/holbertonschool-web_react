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
  