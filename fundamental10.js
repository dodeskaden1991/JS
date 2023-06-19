//Lab: Functions

function grade(number){
    if (number < 3){
        return console.log(`Fail (${Math.trunc(number)})`);
    } else if (number < 3.5){
        return console.log(`Poor (${number.toFixed(2)})`);
    } else if (number < 4.5){
        return console.log(`Good (${number.toFixed(2)})`);
    } else if (number < 5.5){
        return console.log(`Very good (${number.toFixed(2)})`);
    } else {
        return console.log(`Excellent (${number.toFixed(2)})`);
    }
}

function pow(x, y) {
    return console.log(Math.pow(x, y));
}

function repeat(string,number) {
    return console.log(string.repeat(number));
}

function orders(product, sum){
    let price = {
        "coffee" : 1.5,
        "water" : 1,
        "coke" : 1.4,
        "snacks" : 2
    }
    if(price.hasOwnProperty(product)) {
        return console.log((price[product]*sum).toFixed(2));
    } else {
        return console.log("Invalid product");
    }
}

function simpleCalculator(x,y,symbol){
    let calculator = {
        "multiply" : x*y,
        "divide" : x/y,
        "add" : x+y,
        "subtract" : x-y,
        "power" : Math.pow(x,y),
        "square" : x*x,
    }
    if(calculator.hasOwnProperty(symbol)) {
        return console.log(calculator[symbol]);
    } else {
        return console.log("Invalid symbol");
    }
}

function signCheck(){
    let result = [...arguments].reduce((x,y) => x*y)
    if(result > 0){
        return console.log("Positive");
    }else{
        return console.log("Negative");
    }
}

signCheck(5,12-15)