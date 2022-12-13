const isLogged = true;

const firstPromise = (login) => new Promise((res, rej)=>{
    if (login){
        res(Math.random());
    } else {
        rej (new Error("Not logged"));
    }
})

const secondPromise = (val) => new Promise ((res,rej)=>{
    setTimeout(() => {
        if (val > 0.5) {
            res ({name: "John", age: 24});
        } else {
            rej (new Error ("Value too low"));
        }
    }, 5000);
})

firstPromise(isLogged)
.then ((val)=>secondPromise(val))
.then ((val)=>console.log(val))
.catch ((err)=>console.log(err));
