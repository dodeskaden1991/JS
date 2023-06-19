function test(){
let array = [1,2,3]
console.log(array)
array.push(50); 
console.log(array)
array[-5] = 8; 
console.log(array,array[-5], array.length); 
let arr = [10, 20, 30];
console.log(arr.includes(20)); // true
console.log(arr.includes(0)); // false
console.log(arr.join(':')); // 10:20:30
let words = [ "one", "two" ];
console.log(words)
console.log(words.join(' - ')); 
console.log(words.toString())
let sliceArr = array.slice(1,3)
console.log("slice ne vzema poslednioq index: ",sliceArr)
let spliceArr = array.splice(1,3)
console.log("splice reje ot originalniq masiv:", array)
console.log("splice vzema poslednioq index: ",spliceArr)
array.splice(1,0,...spliceArr)
console.log("prisvoqvane na cql masiv",array)
array.splice(1,0,spliceArr)
console.log("prisvoqvane na cql masiv, kato masiv",array)
array.push("push dobavq nakraq")
console.log(array)

let numbers = [ "фор", "оф", "обхожда", "частите", "на целия масив" ];
let output = '';
for (let promenliva of numbers)
output += `${promenliva} `;
console.log(output);

const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(array1)
console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
index = -2;
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
array1.shift()
console.log("shift reje purvi element ",array1)
array1.unshift("Unshift dobavq v nachaloto")
console.log(array1, "shte go pop")
array1.pop()
console.log("pop reje nakraq ", array1)
console.log("concat prisuedinqva masivi",array.concat(array1),array,array1)
console.log(array1.indexOf('Unshift dobavq v nachaloto'))


const num1 = [[1],[2]];
const num2 = [2, [3]];

const numbers2 = num1.concat(num2);

console.log(numbers2);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[1].push("promqna sled concat, samo ako e masiv");

console.log(numbers2);
// results in [[1, 4], 2, [3]]

let words2 = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
let words3 = ['nest', 'Eggs', 'bite', 'Gripp', 'jAw'];
words3.sort()
words2.sort((a, b) => a.localeCompare(b));

console.log(words2);

console.log(words3);


}

function test2(){
    let a = "asd_asd_asd_asd"
    a = a.replace("_","!")
    console.log(a)
    if(a.includes("_")){console.log("includes")}
    while(a.search("_") >= 0){a = a.replace("_","!")}
    console.log(a)
    if(a.includes("_")){console.log("includes")}
    if(!a.includes("_")){console.log("not includes")}
    let probno = typeof(a) == "string" ? "yes" : "No"
    console.log(probno) 
    console.log(101%1)
    while(a.includes("!")){a = a.replace("!",">")}
    console.log(a);
}

test()
