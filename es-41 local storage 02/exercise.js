const user = {
  id: 1,
  name: "John",
  age: 25,
};

function localSave (obj){
  for (key in obj){
    localStorage.setItem(`${key}`,`${obj[key]}`);
  }
}

localSave(user);

const id = localStorage.getItem("id");
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);