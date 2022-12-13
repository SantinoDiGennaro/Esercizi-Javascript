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