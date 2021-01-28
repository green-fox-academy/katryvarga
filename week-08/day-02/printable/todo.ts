import { Printable } from './printable';

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

let todos: Todo[] = [];
let todo = new Todo('Buy milk', 'high', true);
todos.push(todo);

for (let todo of todos) {
  todo.printAllFields();
}
