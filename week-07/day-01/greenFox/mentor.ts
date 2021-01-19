// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:
// getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
// introduce(): 'Hi, I'm name, a age year old gender level mentor.'
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

import { Person } from "./person";

export class Mentor extends Person {
  level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    if (!name && !age && !gender && !level) {
      this.name = 'Jane Doe';
      this.age = 30;
      this.gender = 'female';
      this.level = 'intermediate';
    } else {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.level = level;
    }
  }
  
  getGoal(): void {
    console.log("My goal is: Educate brilliant junior software developers.");
  }

  introduce(): void {
    console.log(
      `Hi, I'm ${this.name} a ${this.age} year old ${this.gender} ${this.level} mentor.`
    );
  }
}
