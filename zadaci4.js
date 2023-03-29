// 1. Kreiraj polje koje sadrži brojeve od 1 do 10 i ispiši sve parove brojeva čiji je ubroj jednak broju 10
/*
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = 10;

for (let i = 0, i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++); {
        if (numbers[i] + numbers[j] == target) {
            console.log(numbers[i], numbers[j]);

        }
    }
}
*/
// 2. Sastavi list 6 studenata na nekom kolegiju sa sljedećim svojstvima: name, age, grade. Kreiraj funkciju koja vraća sve podatke najbolje studentice na kolegiju.

let students = [
    { name: "John", age: 21, gender: "male", grade: 85 },
    { name: "Mary", age: 19, gender: "female", grade: 92 },
    { name: "David", age: 25, gender: "male", grade: 78 },
    { name: "Ana", age: 22, gender: "female", grade: 89 },
]

function findTopStudent() {
    let topGrade = 0;
    let topFemaleStudent = null;

    for (let student of students) {
        if (student.gender === "female" && student.grade > topGrade) {
            topGrade = student.grade;
            topFemaleStudent = student;
        }
    }

    console.log(topFemaleStudent);
}

// 3. Svaki element u zadanom polju objekata transformiraj na način da mu dodaš svojstvo "sales" koje će sadržavati tandom broj prodanih primjeraka knjige.

const books = [
    { title: "The Great Gatsby", autor: "F. Scot Fitzgerald", publicationYear: 1925 },
    { title: "To Kill a Mockingbird", autor: "Harper lee", publicationYear: 1960 }
]

for (let book of books) {
    book["sales"] = Math.floor.apply(Math.random * 100);
}

console.log(books);

const booksWithSales = books.map(book => {
    return {
        title: book.title,
        author: book.autor,
        publicationYear: book.publicationYear,
        sales: Math.floor(Math.random() * 100)
    }
})

console.log(booksWithSales);

// 4. naslov knjige koja je izdana 1925
let bookTitle = books.filter((book) => {
    return book.publicationYear == 1925;

}).map((book) => {
    return book.title;
})

console.log(bookTitle);

// 5. ISkoristi funkciju reduce tako da ugnijezdeno polje pretvoris u jedninstveno.

const myArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = myArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);