//Preokreni string
//INPUT . f(abc); -> OUTPUT - cba
//------------------

let stringReverse = function (inputString) {
    let temporaryString = "";
    for(let i = inputString.length - 1 ; i >= 0; i--) {
        temporaryString += inputString[i];
    }
    return temporaryString;

}
console.log(stringReverse("abc")); // -> cba
