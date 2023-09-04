let text = /[a-z]+/ //търси едно или повече малки букви
let asd = /<(?<tag>\w)>.+<\/\k<tag>>/ //използваме к за затварябе
const text2 = "Hello, my name is John Doe. John John";
const regex = /(?<name>John)\s(?<family>\w*)/gm;

const match = text2.match(regex);

const matches = text2.matchAll(regex);

for(match2 of matches) {
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
console.log(a.substring(3,5))

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
  
