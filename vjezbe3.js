// 1. Primjer

const Osoba = {
    ime: "",
    prezime: "",
    dob: "",
    adresa: "",

    postaviOsobnePodatke: function (ime, prezime, dob, adresa) {
        this.ime = ime;
        this.prezime = prezime;
        this.dob = dob;
        this.adresa = adresa;
    },
    ispisiOsobnePodatke: () => {
        console.log(this.ime);
        console.log(this.prezime);
        console.log(this.dob);
        console.log(this.adresa);
    }
}
Osoba.postaviOsobnePodatke("Jozo", "Curkovic", 50, "P14");
//Osoba.ispisiOsobnePodatke();

Osoba.prezime = "neko novo prezime";
console.log(Osoba.prezime);

Osoba["prezime"] = "Neko novo prezime";
console.log(Osoba.prezime);

// 2. Primjer - Access and Iter

let osoba = {
    ime: "Jozo",
    prezime: "Curkovic",
    adresa: {
        glavniDio: "",
        broj: -1, // osoba.adresa.prezime.adresa

    }
};
for (const key in osoba) {
    console.log(osoba[key]);
}

// 3. Primjer - Prototype

/*
let temporaryString = "";

console.log(JSON.stringify(osoba));

console.log(JSON.parse(osoba));
*/
// 6. primjer - Fun Fact

let staraVarijabla = {
    atribut: 1
}
novaVarijabla = { ...staraVarijabla };
staraVarijabla.atribut = 2;

console.log(novaVarijabla);