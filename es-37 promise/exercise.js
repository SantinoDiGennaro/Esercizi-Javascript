const number = 15;

let promise = new Promise ((resolve, reject) => {
    if (number>10){
        resolve(number);
    } else {
        reject(number);
    }
})

promise
.then(()=>console.log("Number greater than 10"))
.catch(()=>console.log("Number lower than 10"));