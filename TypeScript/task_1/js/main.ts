interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
  }

  const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };

  console.log(teacher3);

  // Directors interface that extends Teacher
  interface Directors extends Teacher {
	numberOfReports: number;
  }

  // Creating an object for Director
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17, // Additional property specific to Directors
  };

  console.log(director1);

  // Interface for the printTeacher function
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
  }

  // Implementation of the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
  }

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for the StudentClass constructor
interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass;
  }

  class StudentClass {
	constructor(public firstName: string, public lastName: string) {}

	workOnHomework(): string {
	  return "Currently working";
	}

	displayName(): string {
	  return this.firstName;
	}
  }

  const student1 = new StudentClass("Alice", "Smith");
  console.log(student1.displayName()); // Output: Alice
  console.log(student1.workOnHomework()); // Output: Currently working
