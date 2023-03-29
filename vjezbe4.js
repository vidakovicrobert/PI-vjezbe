// JS polja i metode
/*
let array_1 = [1, "dva", 3.1];
let array_2 = new Array(1, "dva", 3.1);
let array_3 = Array(1, "dva", 3.1);

console.log(array_1[4]);
console.log(array_2);
console.log(array_3);

let array_11 = [10];
let array_21 = Array(10);
console.log(array_11);
console.log(array_21);

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const fruits = ["apple", "banana", "cherry"];
for (const key in fruits) {
    console.log[key];
}

for (const interator of fruits) {
    console.log(key);
}

const fruits1 = {
    string1; "apple";
string2; "banana";
string3; "cherry";
}


const fruits = ["apple", "banana", "cherry"];
fruits.forEach(x => console.log(x));
fruits.push("apple");
fruits.pop("apple");


let myArray = ["a", "b", "c", "d", "e"];
let myArray2 = ["f", "g", "h"];
//myArray = myArray.slice(1, 4);
console.log(myArray);+
console.log(myArray.concat(myArray2).sort());


let myArray = ["banana", "apple"];
let index = myArray.indexOf("apple");
console.log(index)


let myArray = ["banana", "apple"];
let myArray2 = myArray;
myArray[1] = "ananas";
console.log(myArray2);

const originalArray = [1, 2, 3];

const shallowCopyArray = originalArray;
const shallowCopyArray2 = Array.from(originalArray);

const deepCopyArray = JSON.parse(JSON.stringify(originalArray));

shallowCopyArray[0] = 4;
shallowCopyArray2[0] = 4;
deepCopyArray[0] = 4;

console.log(originalArray);
console.log(shallowCopyArray);
console.log(deepCopyArray);
*/
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((numb) => {
    numb * numb;
});
console.log(squares);

let squares2 = []
for (const numb of numbers) {
    squares2.push(numb * numb);
}
console.log(squares2)

let arr = new Array();