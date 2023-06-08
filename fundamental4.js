function echotype(input){
    typeof(input) == "number" || typeof(input) == "string" ? 
        (console.log(typeof(input)), console.log(input)) :  
        (console.log(typeof(input)), console.log("Parameter is not suitable for printing"))
    }

function concatenate(name1, name2, dell){
    console.log(`${name1}${dell}${name2}`)
} 

function right(word,symbol,result){
    let newWord = word.replace("_",symbol)
    newWord === result ? console.log("Matched") : console.log("Not Matched")
}

function integerFloat(){
    let sum = [...arguments].map(Number).reduce((a, b) => a + b);
    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`)
}

function amazing(number){
    sum = number.toString().split("").map(Number).reduce((a,b) => a + b, 0).toString()
    sum.includes('9') ? 
        console.log(`${number} Amazing? True`) : 
        console.log(`${number} Amazing? False`)
}

function gramophone(artist,album,song){
    let time = artist.length * album.length * song.length / 2
    let rotation = Math.ceil(time / 2.5)
    console.log(`The plate was rotated ${rotation} times.`)
}

function required(pages,inhour,days){
    console.log(pages/inhour/days)
}

function centuries(number){
    let years = number * 100;
    let days = Math.trunc(years * 365.2422)
    let hours = days * 24
    let minutes = hours * 60
    console.log(`${number} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
} 

function special(n){
    const special = {
        5 : true,
        7 : true,
        11: true,
    }
    for(let i = 1; i<= n; i++){
        let sum = i.toString().split("").map(Number).reduce((a,b) => a + b, 0)
        special.hasOwnProperty(sum) ? console.log(`${i} -> True`) : console.log(`${i} -> False`)
    }
} 

function triples(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let l = 0; l < n; l++){
                console.log(String.fromCharCode(97+i)+String.fromCharCode(97+j)+String.fromCharCode(97+l))
            }
        }
    }
} 
triples(3)