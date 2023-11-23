let http = require('http');
let url = require('url');

const another = require ('./_another.js'); 
const { sum } = require ('./_another.js');
//console.log(http)
//console.log(url)

console.log (another.sum (2, 3)); 
console.log (sum (2, 6)); 
console.log (another.multiply (2, 3)); 
try {
console.log (multiply (2, 6)); 
} catch (e) {
    console.log(e.message);}
