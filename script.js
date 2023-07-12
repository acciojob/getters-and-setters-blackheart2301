//complete this code
class Person {}
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
////Create a class called Person that has a constructor method that takes two arguments: name and age. It should have a getter for name and a setter for age. Then, create a subclass called Student that extends the Person class. Add a method to the Student class called study() that logs <name> is studying to the console. Also, create a subclass called Teacher that extends the Person class. Add a method to the Teacher class called teach() that logs <name> is teaching to the console.
/////////////////////////////////////
class Student extends Person {}
 study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {}
 teach() {
    console.log(`${this._name} is teaching`);
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
