class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;
  constructor (firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  set lastName (lastName) {
    this.#lastName = lastName;
  }

  get fullName () {
    let myFullName = this.#firstName + " " + this.#lastName;
    return myFullName;
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);