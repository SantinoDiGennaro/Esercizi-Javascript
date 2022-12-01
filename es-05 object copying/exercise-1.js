const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

// con la dichiarazione di person2=person1 si indica che gli oggetti puntano alla stessa memoria,
// di conseguenza cambiare i valori a uno dei due oggetti lo cambierà a entrambi.
// per evitare che possano succedere cose simili si potrebbe utilizzare un ciclo che assegna a person2 gli stessi dati di person1 ma rendendolo indipendente per le future sostituzioni.

console.log(person1);
console.log(person2);
