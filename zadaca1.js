// 1. zadatak - FizzBuzz

function fizzBuzz() {
  for (let num = 0; num <= 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("FizzBuzz")
    }
    else if (num % 3 === 0) {
      console.log("Fizz")
    }
    else if (num % 5 === 0) {
      console.log("Buzz")
    }
    else {
      console.log(num)
    }
  }
}
console.log(fizzBuzz());


// 2. zadatak Broji do 100, koristeći jednu varijablu.

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}