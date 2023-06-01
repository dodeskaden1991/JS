//Exercise: Arrays
function added(array){
    fixed = array.map(Number).map((x,y) => {
        if(x % 2 == 0){
            return x + y
        }else{
            return x - y
        }
    })
    console.log(fixed)
    console.log(array.reduce((x,y) => x+y, 0))
    console.log(fixed.reduce((x,y) => x + y, 0))
}

function common(array, array2){
    for(let i=0; i <= array.length-1; i++){
        matched = array2.find((x) => x === array[i])
        if(matched){console.log(matched)}
        // if(array2.includes(array[i])){console.log(array[i])} и двата метода работят
    }
}

function merge(array,array2) {
    let newArray = array.map((x,y) => {
        if(y % 2 == 0){
            return Number(x) + Number(array2[y])
        }else{return x + String(array2[y])}
    })
    console.log(newArray.join(" - "))
}

function rotation(array,symbol) {
    while(symbol >= array.length){
        symbol -= array.length
    }
    console.log(...array.slice(symbol),...array.slice(0,symbol))
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

function magicSum(array,magic){
    let bomb = []
    for(let i = 0; i<array.length - 1; i++){
        let testNumber = parseInt(array.slice(i,i+1))
        let testArray = array.slice(i+1).map(x => parseInt(x) + parseInt(testNumber))
        let match = testArray.includes(magic)
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


magicSum(['',1,2,1,2,'1',2,1,2,0,3,'0',-5,8],4)
