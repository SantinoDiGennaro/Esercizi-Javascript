let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let arr = [num1, num2];
num2 = arr[0];
num1 = arr[1];

console.log('After swap: ', num1, num2); // After swap: 20 10