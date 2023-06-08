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

repeat("asd",8)