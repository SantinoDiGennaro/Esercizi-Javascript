function printAsyncName (callback, name) {
    setTimeout(() => {
        callback(name);
    }, 1000);
}

function printName (name) {
    setTimeout(() => {
        console.log(name);
    }, 1000);
}

printAsyncName(printName, "Santino");