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
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

const member2 = {
    firstName: "Hege2",
    lastName: "Nilsen2",
}

let fullName_static = person_bind.fullName.bind(member, "Oslo", "Norway");
let fullName_dynamic = person_bind.fullName.bind(member);
let fullName2 = person_bind.fullName.apply(member, ["Oslo", "Norway"]);
let fullName3 = person_bind.fullName.call(member, "Oslo", "Norway");
console.log(fullName_static()); // Hege Nilsen,Oslo,Norway
console.log(fullName_static(1, 2)); // Hege Nilsen,Oslo,Norway
console.log(fullName2, typeof (fullName2)); // Hege Nilsen,Oslo,Norway
console.log(fullName3, typeof (fullName3)); // Hege Nilsen,Oslo,Norway
console.log(fullName_dynamic(), typeof (fullName_dynamic)); // Hege Nilsen,undefined,undefined
console.log(fullName_dynamic(1, 2)); // Huge Nilsen,1,2

const f = (function () {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();

f();
f();
f();
f();
f();

(function hello() { console.log("hello"); })();

function createFormatter(separator, symbol, symbolFirst, ref_toFunction) {
    return (number) => ref_toFunction(separator, symbol, symbolFirst, number);
    //това ще върне функция, която има 4 параметъра :) 
    //ref_toFunction е просто име на променлива който е еквивалентна на output
    //с return ние връщаме нова функция, която приема само едно число, но реално във създадения под клон вече извикваме самия output с пълни данни
}

function createFormatter2(separator, symbol, symbolFirst, ref_toFunction) { 
    //това ще върне функция, която има 4 параметъра :) тук е по-нагледно
    return function(number,...input) { 
        console.log(input)
        return ref_toFunction(separator, symbol, symbolFirst, number); 
    }; 
}

function createFormatter3(separator, symbol, symbolFirst) { 
    //това показва какво се случва всъщност :)
    return function(number) { 
        return output(separator, symbol, symbolFirst, number); 
    }; 
}

function createFormatter4(separator, symbol, symbolFirst) { 
    //а това какво се случва без да се прескача към друга функция :)
    return function(number) { 
        if(symbolFirst){
            return (symbol + " " + number.toFixed(2).replace(".",separator))
        }else{
            return (number.toFixed(2).replace(".",separator) + " " + symbol)
        }
    }; 
}

function output(separator, symbol, symbolFirst, number) {
    if(symbolFirst){
        return (symbol + " " + number.toFixed(2).replace(".",separator))
    }else{
        return (number.toFixed(2).replace(".",separator) + " " + symbol)
    }
}
const dollar = createFormatter(',', '$', true, output);
const leva = createFormatter2(':', 'lv.', false, output);
const euro = createFormatter3('^', 'e', true);
const euro2 = createFormatter3('^', 'E', false);
const crypto = createFormatter4('!', 'Crypt', true);

console.log(dollar(5345,123,123,123)); // $ 5345,00
console.log(leva(123,"факе",123));
console.log(euro(5));
console.log(euro2(6));
console.log(crypto(5));

//мап приема и функции, както филтър и етк
users = [ { name: 'Tim', age: 25 },
{ name: 'Sam', age: 30 },
{ name: 'Bill', age: 20 } ];
getName = (user) => user.name;
usernames = users.map(getName);
console.log(usernames)

//pure се нарича функция която всеки път връща един и същи резултат
let number = 1;
const increment = () => number += 1;
console.log(increment()) // 2
console.log(increment()) // 3
// pure function:
const increment2 = n => n + 1;
console.log(increment2(1))
console.log(increment2(1))
console.log(increment2(2))

function sum3(a) {
    return (b) => {
    return (c) => {
    return a + b + c;
    }
    }
    }
    console.log(sum3(5)(6)(8)); 
let firsr_sum = sum3(5);
let second_sum = firsr_sum(6);
let third_sum = second_sum(8);
console.log(third_sum);