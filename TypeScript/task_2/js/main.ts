// DirectorInterface with the expected methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface with the expected methods
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Class Director implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Class Teacher implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function createEmployee
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }

  // function isDirector
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }

  // function executeWork
  function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // Example usage of createEmployee
  console.log(createEmployee(200)); // Should print: Teacher
  console.log(createEmployee(1000)); // Should print: Director
  console.log(createEmployee('$500')); // Should print: Director

  executeWork(createEmployee(200)); // Should print: Getting to work
  executeWork(createEmployee(1000)); // Should print: Getting to director tasks

  // String literal types for Subjects
  type Subjects = "Math" | "History";

  // Function teachClass
  function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else {
      return "Teaching History";
    }
  }

  // Example usage of teachClass
  console.log(teachClass("Math")); // Should print: Teaching Math
  console.log(teachClass("History")); // Should print: Teaching History
  