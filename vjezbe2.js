//function definition
//primjer 1

//function keyword
//name squareMe
//params - numb
//body - return

function squareMe(numb) {
    return numb * numb;
}
squareMe();

//2. Anonymous Functions
//primjer 2
/*
function (numb) {
    return numb * numb;
}
console.log(numb);
*/

//3. Function Expression
//Primjer 3

const square = function (numb) {
    return numb * numb;
}

//4. Imeediately Invoked function Expression (IIFE)
//Primjer 4

(function () {
    let numb = 3;
    console.log(numb * numb);
})()

//5. Arrow Functions
//primjer 5

function squareMe(numb) { return number * number; }

(numb) => { return numb * numb };

numb => number * number;