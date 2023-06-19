//Functions - Exercise

function  smallest(){
    return console.log(Math.min.apply(null,arguments));
} 

function addAndSubtract(){
    sum = function(){
        return arguments[0] + arguments[1];
    };
    subtract = function(){
        return sum(arguments[0],arguments[1]) - arguments[2];
    };
    return console.log(subtract.apply(null,arguments));
}

function characters(symbol1,symbol2){
    inRange = function(start,end){
        for(let i = start + 1; i < end; i++){
            process.stdout.write(String.fromCharCode(i) + ' ');
        }
    }
    console.log()
    if(symbol1.charCodeAt(0) < symbol2.charCodeAt(0)){
        inRange(symbol1.charCodeAt(0),symbol2.charCodeAt(0));
    }else{
        inRange(symbol2.charCodeAt(0),symbol1.charCodeAt(0));
    }
}

function oddAndEven(number){
    let odd = number.toString().split("").map(Number).filter(x => x % 2 != 0).reduce((x,y) => x + y,0);
    let even = number.toString().split("").map(Number).filter(x => x % 2 == 0).reduce((x,y) => x + y,0);
    return console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

function palindrome(array){
    for(let i = 0; i < array.length; i++){
        let reverse = array[i].toString().split("").reverse().join("")
        if(array[i] == reverse) {
            console.log("true")
        }else{
            console.log("false")
        }
    }
}

function password(word){
    let lengthChecker = function(){
        if(word.length >= 6 && word.length <= 10){
            return true
        }else{
            console.log("Password must be between 6 and 10 characters")
            return false
        }
    }
    let charactersChecker = function(){
        let checked = word.toString().split("").map(x => {
            if((x.charCodeAt(0) > 47 && x.charCodeAt(0) < 58) || (x.charCodeAt(0) > 64 && x.charCodeAt(0) < 91) || (x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123)){
                return true
            }else{
                return false
            }
        })
        if(checked.every(x => x == true)){
            return true
        }else{
            console.log("Password must consist only of letters and digits")
            return false
        }
    }
    let digitsChecker = function(){
        let checked = word.split("").map(x => {
            if(x.charCodeAt(0) > 47 && x.charCodeAt(0) < 58){
                return true
            }else{
                return false
            }
        }).filter(x => x == true)
        if(checked.length > 1){
            return true
        }else{
            console.log("Password must have at least 2 digits")
            return  false
        }
    }
    let checked = []
    checked += lengthChecker() + " "
    checked += charactersChecker() + " "
    checked += digitsChecker() + " "
    if(checked.includes("false")){
        return
    }else{
        return console.log("Password is valid")
    }
}

function nxn(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            process.stdout.write(n + " ")
        }
    console.log("")
    }
}

function perfectNumber(number){
    let sum = 0
    for(let i = 1; i < number; i++){
        if(number % i == 0){
            sum += i
        }
    }
    sum == number ? console.log("We have a perfect number!") : console.log("It's not so perfect")
    return
}

function loadingBar(bar){
    let valu = [".",".",".",".",".",".",".",".",".","."]
    for(let i = 0; i < bar / 10; i++){
        valu[i] = "%"
    }
    if(bar<100){
        console.log(`${bar}% [${valu.join("")}]`)
        console.log(`Still loading...`)
    }else{
        console.log(`100% Complete!`)
        console.log(`[${valu.join("")}]`)
    }
}

function factorial(x,y){
    let factorialNumber = function(number){
        if(number == 1){
            return 1
        }else{
            return number * factorialNumber(number - 1)
        }
    }
    return (factorialNumber(x) / factorialNumber(y)).toFixed(2)
} 

console.log(factorial(5,2))