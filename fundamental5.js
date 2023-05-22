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


reversed(2,3,4)