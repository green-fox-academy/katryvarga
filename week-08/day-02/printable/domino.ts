// Create a new class called Domino that has two integer fields that represents the two sides of a domino
// Create a new class called Todo that has three fields representing the task as a string, the priority as string and whether it is done or not as a boolean
// Create a new interface called Printable
// It should have one method definition called printAllFields
// Implement this interface on the Domino and Todo classes
// The domino should have the following string representation: Domino A side: 3, B side: 2
// The todo should have the following string representation: Task: Buy milk | Priority: high | Done: true
// for (let domino of dominoes) {
//   domino.printAllFields();
// }

// for (let todo of todos) {
//   todo.printAllFields());
// }

class Domino implements Printable {
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  printAllFields(): void {
    console.log(`Domino A side: ${this.sideA}, B side: ${this.sideB}`);
  }
}

class Todo implements Printable {
  taskName: string;
  priority: string;
  isItDone: boolean;

  constructor(taskName: string, priority: string, isItDone: boolean) {
    this.taskName = taskName;
    this.priority = priority;
    this.isItDone = isItDone;
  }

  printAllFields(): void {
    console.log(
      `Task: ${this.taskName} | Priority: ${this.priority} | Done: ${this.isItDone}`
    );
  }
}

interface Printable {
  printAllFields();
}

let dominoes: Domino[] = [];
let domino = new Domino(3, 2);
dominoes.push(domino);
let todos: Todo[] = [];
let todo = new Todo('Buy milk', 'high', true);
todos.push(todo);

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
