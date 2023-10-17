let text = /[a-z]+/ //търси едно или повече малки букви
let asd = /<(?<tag>\w)>.+<\/\k<tag>>/ //използваме к за затварябе
const text2 = "Hello, my name is John Doe. John John";
const regex = /(?<name>John)\s(?<family>\w*)/gm;

const match = text2.match(regex);

const matches = text2.matchAll(regex);

for (match2 of matches) {
    console.log("exec")
    console.log("___")
    console.log(match2);
    console.log("___")
    console.log(...match2);
    console.log("___")
    console.log(match2.groups.name)
    console.log(match2.groups.family)
    console.log(match2.index);
    console.log("___")
}
let a = "хелло лорлд"
console.log(a.substring(3, 5))

// for (const match of matches) {
//     console.log("tuk sum")
//     console.log(match.groups.family); // "John Doe" and "John John"

//     }

// while(match2 = regex.exec(text2)) {
//     console.log("exec")
//     console.log("___")
//     console.log(match2);
//     console.log("___")
//     console.log(...match2);
//     console.log("___")
//     console.log(match2.groups.name)
//     console.log(match2.groups.family)
//     console.log(match2.index);
//     console.log("___")
// }

// console.log(match);
//console.log(...match2);
// console.log(matches);

let text3 = 'Peter: 123 Mark: 456';
let replacement = '999';
let regexp = /\d{3}/g;
let result = text3.replace(regexp, replacement);
console.log(result);

let text4 = '1 2 3 4';
let regexp2 = /\s+/g;
let result2 = text4.split(regexp);
console.log(result2) // ['1', '2', '3', '4'];

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

let person = {
    name: "Иван",
    age: 25,
    gender: "мъж",
    hobbies: ["футбол", "кино", "плуване"]
};

// Дефинираме функция, която ще служи като втори параметър на JSON.stringify ()
function replacer(key, value) {
    // Ако ключът е "gender", пропускаме го от изходния низ
    if (key === "gender") {
        return undefined;
    }
    // Ако ключът е "age", увеличаваме стойността с едно
    if (key === "age") {
        return value + 1;
    }
    // Ако ключът е празен, добавяме ново свойство "status" със стойност "активен"
    if (key === "") {
        value.status = "активен";
    }
    // Връщаме стойността без промяна за всички останали случаи
    return value;
}

// Използваме JSON.stringify () с функцията като втори параметър
let json = JSON.stringify(person, replacer);
console.log(json);
// Резултатът е:
// {"name":"Иван","age":26,"hobbies":["футбол","кино","плуване"],"status":"активен"}

//Ако вторият параметър е масив, той служи като бял списък за избор на свойствата, които искате да включите в изходния низ. Масивът трябва да съдържа низове или числа, които са имената на свойствата. Например:

// Дефинираме масив, който ще служи като втори параметър на JSON.stringify ()
let filter = ["name", "hobbies"];

// Използваме JSON.stringify () с масива като втори параметър
let json2 = JSON.stringify(person, filter);
console.log(json2);
// Резултатът е:
// {"name":"Иван","hobbies":["футбол","кино","плуване"]}

//Третият параметър може да бъде низ или число. Той служи за добавяне на интервали или друг символ за подравняване на елементите в изходния низ. Това прави JSON данните по-четими за човешкото око. Ако параметърът е число, той определя броя на интервалите, които да се използват за подравняване. Ако параметърът е низ, той определя символа, който да се използва за подравняване. Например:


// Използваме JSON.stringify () с низа "-" като трети параметър
let json3 = JSON.stringify(person, null, "-");
console.log(json3);
