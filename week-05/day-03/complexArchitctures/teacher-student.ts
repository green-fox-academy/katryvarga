// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
  learn(): void {
    console.log("The student is learning something new");
  }

  question(teacher: Teacher): void {
    teacher.answer();
  }
}

class Teacher {
  teach(student: Student): void {
    student.learn();
  }

  answer(): void {
    console.log("The teacher is answering a question");
  }
}

let Nimród = new Student();
let Adam = new Teacher();

Nimród.question(Adam);
Adam.teach(Nimród);
