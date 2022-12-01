function sumUntil(maxValue) {
  let value=0;
  for (let i=0;i<=maxValue;i++){
    value+=i;
  }
  return value;
}

console.log(sumUntil(5));