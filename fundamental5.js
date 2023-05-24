function sum(number){
    sumary = number.toString().split("").map(Number).reduce((a,b) => a + b, 0)
    console.log(sumary)
}

function text(){
    strings = [...arguments].join("")
    console.log(strings)
}

function solution(town,population,area){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
}

function metres(number){
    console.log((number / 1000).toFixed(2))
}

function pound(number){
    console.log((number * 1.31).toFixed(3))
}

function reversed(){
    word = [...arguments].reverse().join(" ")
    console.log(word)
} 

function lowerUpper(symbol){
    let word = symbol.toUpperCase();
    word === symbol ? console.log("upper-case") : console.log("lower-case")
} 

function calculator(a,symbol,b){
    const operator = [
        {
        process: "+",
        result: (a,b) => {return a+b},
        },
        {
            process: "-",
            result: (a,b) => {return a-b},
        },
        {
            process: "*",
            result: (a,b) => {return a*b},
        },
        {
            process: "/",
            result: (a,b) => {return a/b},
        },
    ]
    let resultate = operator.find((item) => item.process === symbol);
    console.log(resultate.result(a,b).toFixed(2))
}

function gladiator(count,helmet,sword,shield,armor){
    let sum = 0;
    let shieldPoint = 0
    for(let i = 1; i <= count; i++){
        if(i % 2 == 0){sum += helmet}
        if(i % 3 == 0){sum += sword}
        if(i % 2 ==0 && i % 3 == 0){sum += shield; shieldPoint ++}
        if(shieldPoint == 2){sum += armor; shieldPoint = 0;}
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}

function spice(number){
    function resultate(a,b){return console.log(a),console.log(b)}
    let sum = 0;
    let days = 0
    if (number < 100){
        return resultate(days,sum)
    }else{
    while(number>=100){
        sum += number - 26;
        number -= 10;
        days ++
    }
    }
    return resultate(days,sum-26)
}

spice(450)