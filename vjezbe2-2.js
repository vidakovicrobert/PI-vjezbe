//1. Intro 
const noviString = new String("Ovo je nas string");
const noviPrimitivniString = ("Ovo je nas string");

noviString;
noviPrimitivniString;

console.log(typeof noviString);
console.log(typeof noviPrimitivniString);


//2. How to maka a string
let prviNacin = "";
let drugiNacin = '';
let treciNacin = ``;

let hello = "Hello ";
console.log(hello + world);


//3. How to add a new piece of string
let helloWorld = hello + world;

//4. String methods, some of them
let stringMethods = "string";
console.log(stringMethods.lenght);

const odredenoSlovo = "odredenoSlovo";
console.log(odredenoSlovo[3]);

const danZena = "Danas je dan zena";
if(danZena.includes("dan")) {
    console.log("ukljucuje")
}

//danZena.indexOf
//danZena.slice
//danZena.toLowerCase;
//danZena.toUpperCase;
//danZena.replace;