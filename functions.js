function printStars(count) {
    console.log("*".repeat(count));
}

function sorting() {
    let words = ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'];
    let sortType = function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
    console.log(words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }))
    console.log(words.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }))
    console.log(words.sort(sortType));

    let people = [
        { name: "Alice", age: 25, height: 170 },
        { name: "Bob", age: 30, height: 180 },
        { name: "Charlie", age: 28, height: 175 },
        { name: "David", age: 25, height: 165 },
        { name: "Alice", age: 15, height: 170 },
        { name: "alice", age: 25, height: 170 },
        { name: "Alice", age: 25, height: 175 },
        { name: "Eve", age: 27, height: 160 }
    ];
    let people2 = people.concat();

    // Функция за сравнение по три критерия
    function compareByCriteria(a, b) {
        // Първо сравняваме по име (лексикографски ред)
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        // Ако имената са еднакви, сравняваме по възраст (възходящ ред)
        if (a.age < b.age) {
            return -1;
        }
        if (a.age > b.age) {
            return 1;
        }
        // Ако възрастите са еднакви, сравняваме по ръст (низходящ ред)
        if (a.height > b.height) {
            return -1;
        }
        if (a.height < b.height) {
            return 1;
        }
        // Ако всички критерии са еднакви, връщаме нула
        return 0;
    }

    // Сортиране на масива по три критерия
    people.sort(compareByCriteria);

    // Отпечатване на резултата
    console.log(people);

    let compareByCriteria2 = (a, b) =>
        // Сравняваме по име (лексикографски ред)
        a.name.localeCompare(b.name) ||
        // Ако имената са еднакви, сравняваме по възраст (възходящ ред)
        a.age - b.age ||
        // Ако възрастите са еднакви, сравняваме по ръст (низходящ ред)
        b.height - a.height;

    people2.sort(compareByCriteria2)
    console.log(people2)
}

// const compareNumbers = {
//     ascending: (a, b) => a - b;
//     descending: (a, b) => b - a;
//     };
//     /// сортиране с обект и функция

printStars("5")
sorting()

let blah = 0

const myArray = [['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '1'],
['2', '3', '1', '4', '0'],
['9', '8', '5', '2', '4']]

const containsDuplicate = (array) => {
    for (const subArray of array) {
        const seen = new Set()
        console.log(subArray);
        for (const value of subArray) {
            console.log(value)
            console.log(seen)
            if (seen.has(value)) {
                return true;
            }
            seen.add(value)
        }
    }
    return false
}

console.log(containsDuplicate(myArray)) // true

const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " : " + city + ", " + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// Това ще върне "John Doe,Oslo,Norway"
console.log(person.fullName.call(person1, "Oslo", "Norway"))
console.log(person.fullName.apply(person1, ["Burgas", "Bulgaria"]))

const obj = {
    name: 'Peter',
    outer() {
        console.log(this); // Object {name: "Peter"}
        const inner = () => console.log(this);
        inner();
    }
}
obj.outer(); // Object {name: "Peter"}

const obj2 = {
    name: 'Peter',
    outer() {
        console.log(this); // Object {name: "Peter"}
        const inner = function () { console.log(this); }
        inner();
    }
}
obj2.outer(); // Window

function sayHello(...name) {
    console.log("Здравей, " + name + ". Това е " + this);
}

var test_this = "Това е this, то може и да е обикновена променлива";
var names = {
    1: 'Deyan',
    2: "Dragan",
    3: "Petkan"
}

// Това ще изведе "Здравей, Deyan. Това е Bing" и т.н. за всеки елемент от names
sayHello.apply(test_this, Object.values(names))

//пример как се презаписват име и професия
const firstPerson = {
    name: "Peter",
    prof: "Fisherman",
    shareInfo: function () {
    console.log(`${this.name} works as a ${this.prof}`);
    }
    };
    const secondPerson = { name: "George", prof: "Manager" };
    firstPerson.shareInfo.apply(secondPerson); // подава данните за this



    const person_bind = {
        fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
        }
        
        const member = {
        firstName:"Hege",
        lastName: "Nilsen",
        }

        const member2 ={
            firstName: "Hege2",
            lastName: "Nilsen2",
        }
        
        let fullName_static = person_bind.fullName.bind(member, "Oslo", "Norway");
        let fullName_dynamic = person_bind.fullName.bind(member);
        let fullName2 = person_bind.fullName.apply(member, ["Oslo", "Norway"]);
        let fullName3 = person_bind.fullName.call(member, "Oslo", "Norway");
        console.log(fullName_static()); // Hege Nilsen,Oslo,Norway
        console.log(fullName_static(1,2)); // Hege Nilsen,Oslo,Norway
        console.log(fullName2); // Hege Nilsen,Oslo,Norway
        console.log(fullName3); // Hege Nilsen,Oslo,Norway
        console.log(fullName_dynamic()); // Hege Nilsen,undefined,undefined
        console.log(fullName_dynamic(1,2)); // Huge Nilsen,1,2