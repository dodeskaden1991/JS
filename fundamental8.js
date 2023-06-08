//Exercise: as
function added(a){
    fixed = a.map(Number).map((x,y) => {
        if(x % 2 == 0){
            return x + y
        }else{
            return x - y
        }
    })
    console.log(fixed)
    console.log(a.reduce((x,y) => x+y, 0))
    console.log(fixed.reduce((x,y) => x + y, 0))
}

function common(a, a2){
    for(let i=0; i <= a.length-1; i++){
        matched = a2.find((x) => x === a[i])
        if(matched){console.log(matched)}
        // if(a2.includes(a[i])){console.log(a[i])} и двата метода работят
    }
}

function merge(a,a2) {
    let newa = a.map((x,y) => {
        if(y % 2 == 0){
            return Number(x) + Number(a2[y])
        }else{return x + String(a2[y])}
    })
    console.log(newa.join(" - "))
}

function rotation(a,symbol) {
    while(symbol >= a.length){
        symbol -= a.length
    }
    console.log(...a.slice(symbol),...a.slice(0,symbol))
}

function maxInLine(number){
    let checker = number
    let result = number.filter((valu,index) => {
    if(valu > number[index+1] || number[index+1] === undefined){if(valu === 0){return valu === 0}else{return valu}}
    })
    if(checker.toString() !== result.toString()){maxInLine(result)}
    else{console.log(...checker)}
}

function equal(numbers){
    let flag = true
    if(numbers.length == 1){return console.log(0)}
    else if(numbers.length == 2){return console.log("no")}
    for(i = 1; i<numbers.length - 1; i++){
        let left = numbers.slice(0,i).reduce((x,y) => x + y,0)
        let right = numbers.slice(i+1).reduce((x,y) => x + y,0)
        if(left == right){console.log(i), flag = false}
    }
    if(flag){console.log("no")}
}

function maxSequence(number){
    let maxLenght = 0;
    let maxLenghtNumber = []
    for(i=0; i<number.length; i++){
        let maxLenghtChecker = 1
        maxLenghtNumberChecker = [number[i]]
        while(number[i] == number[i+1]){maxLenghtChecker++; maxLenghtNumberChecker.push(number[i]); i++}
        if(maxLenghtChecker > maxLenght){maxLenght = maxLenghtChecker; maxLenghtNumber = maxLenghtNumberChecker}
    }
    maxLenght > 1 ? console.log(...maxLenghtNumber) : undefined
}

function magicSum(a,magic){
    let bomb = []
    for(let i = 0; i<a.length - 1; i++){
        let testNumber = parseInt(a.slice(i,i+1))
        let testa = a.slice(i+1).map(x => parseInt(x) + parseInt(testNumber))
        let match = testa.includes(magic)
        if(match){
            if(bomb.includes(testNumber)){continue}
            console.log(`${testNumber} ${magic-testNumber}`)
            bomb.push(testNumber)
            bomb.push(magic - testNumber)
        }
    }
}

function magicSumByVasil(arr, magicNum){
   
    for(let i = 0; i < arr.length - 1; i++){
       for(let j = i + 1; j < arr.length; j++){
           if(arr[i] + arr[j] == magicNum){
            console.log(arr[i] + " " + arr[j]);
           }

        }

    }

}

function magicSumByDodeskaHate(a, magic){
    let i=0
    let j=0
    while(i< a.length){
        j = i + 1 
        while(j < a.length){
            a[i] + a[j] == magic ? console.log(`${a[i]} ${a[j]}`) : undefined
            j++
        }
        i++
    }
}

function dungeonest(gamestatus){
    let heroCharackter = {
        life : 100,
        coins : 0,
        mapLevel : 0
    }
    gameBody = gamestatus[0].split("|")

    while(true){
        if(gameBody[heroCharackter[`mapLevel`]] != undefined){
            let currentGameBody = gameBody[heroCharackter[`mapLevel`]].split(" ")
            let typeOfLevel = currentGameBody[0]
            let pointOfLevel = Number(currentGameBody[1])
            if(typeOfLevel == "chest"){
                heroCharackter["coins"] += pointOfLevel
                console.log(`You found ${pointOfLevel} coins.`)
            }else if(typeOfLevel == "potion"){
                heroCharackter["life"] += pointOfLevel
                heroCharackter["life"] > 100 ? (
                    lifeChecker = pointOfLevel - (heroCharackter["life"] - 100),
                    heroCharackter["life"] = 100,
                    console.log(`You healed for ${lifeChecker} hp.`),
                    console.log(`Current health: ${heroCharackter["life"]} hp.`)
                 ) : (
                    console.log(`You healed for ${pointOfLevel} hp.`),
                    console.log(`Current health: ${heroCharackter["life"]} hp.`)
                 )
            }else{
                heroCharackter["life"] -= pointOfLevel
                if(heroCharackter["life"] <= 0){
                    console.log(`You died! Killed by ${typeOfLevel}.`)
                    console.log(`Best room: ${heroCharackter[`mapLevel`]+1}`)
                    break;
                }else{
                    console.log(`You slayed ${typeOfLevel}.`)
                }
            }
        }
        else{
            console.log("You've made it!")
            console.log(`Coins: ${heroCharackter[`coins`]}`)
            console.log(`Health: ${heroCharackter[`life`]}`)
            break}
        heroCharackter[`mapLevel`] ++
    }
} 

function ladybugs(){
    ladyBugsPlaceLength = ladybugs.arguments[0][0];
    ladyBugsPlace = []
    numberOfLadyBugs = ladybugs.arguments[0][1].split(" ").map(Number)
    for(let i = 0; i<ladyBugsPlaceLength; i++){
        if(numberOfLadyBugs.includes(i)){ladyBugsPlace.push(1)}
        else{ladyBugsPlace.push(0)}
    }
    ladyBugsFly = ladybugs.arguments[0].slice(2)
    for(let i = 0; i < ladyBugsFly.length; i++){
        ladyBugsFlyCurrent = ladyBugsFly[i].split(" ")
        flyposition = Number(ladyBugsFlyCurrent[0])
        flyDestination = ladyBugsFlyCurrent[1]
        flyStep = Number(ladyBugsFlyCurrent[2])
        if(flyposition >= ladyBugsPlace.length){continue}
        if(ladyBugsPlace[flyposition] == 0){continue}
        ladyBugsPlace[flyposition] = 0
        fly = true
        while(fly){
            if(flyDestination == "right"){flyposition += flyStep}
            if(flyDestination == "left"){flyposition -= flyStep}
            if(flyposition < 0 || flyposition >= ladyBugsPlaceLength){fly = false}
            else if(ladyBugsPlace[flyposition] == 0){ladyBugsPlace[flyposition] = 1; fly = false}
        }
    }    
    console.log(...ladyBugsPlace)
}

ladybugs(
    [ 10, '3',
'3 left 2',
'1 left -2',])
