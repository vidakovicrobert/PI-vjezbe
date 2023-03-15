//Ne smijes koristiti in-built string metode u rjesavanju zadataka :)
//Ako hoces dodatne bodove onda rijesi i s ugradenim metodama
​
// 1. Preokreni string -
// INPUT - f(abc); -> OUTPUT - cba
​/*
let stringReverse = function (inputString) {
    let temporaryString = "";
    for(let i = inputString.length - 1; i >= 0; i--) {
        temporaryString += inputString[i];
    }
    return temporaryString;
}
console.log(stringReverse("abc")); //-> cba;
​*/
// 2. Je li string palindrom?
// INPUT - f(ana); -> OUTPUT - true
​function isPalindrome(str) {
    const length = str.length;
    for(let i = 0; i < length / 2; i++){
        if (str[i] != str[length -1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('ana'));
// -------------------
​
// 3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d); -> OUTPUT - (abcefgh)
// -------------------
​
// 4. Makni vise odredenih slova
// INPUT - f(abcdefghd, [c, d]); -> OUTPUT - (abefgh)
// -------------------
​
// 5. Ispisi slova koja se ponavljaju
// INPUT - f(abbcdeefff); -> OUTPUT - (bcdef)
// -------------------
​
// 6. Pretrazi rijec u recenici
// INPUT - f(Ne pada mi nista pametno na pamet, na); -> OUTPUT - (true)
// -------------------
​
// 7. Prvo i zadnje slovo prebaci iz malog u veliko ili iz velikog u malo
// INPUT - f(I dalje mi ne pada mi nista pametno na pamet); -> OUTPUT - (i dalje ... na pameT)
// -------------------
​
// 8. Ako pronades dupliciranu vrijednost u arrayju, rijesi se duplikata na nacin da konkateniras <string> + (x) gdje je x = 1, 2, ..., n, na kraj stringa kao svojevrsni sufiks.
​
// DODATNA PRAVILA:
// Mala i velika slova se tretiraju jednako
// Svaki primjerak iste rijeci mora imati sufiks s brojem
// Input se ne smije modificirati
// Funkcija mora biti napisana u obliku arrow funkcije
// Moras osigurati validan input - Kod ne smije pucati
// INPUT - f([Primjer, primjer, " ", "prim", null, 1, "\n", primjer (3)]); -> OUTPUT - ([primjer, primjer (1), primjer (2)])