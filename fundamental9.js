// More Exercise: Arrays

function printN(array){
    step = Number(array.pop())
    fuckNewArray = []
    for(let i = 0; i < array.length; i += step){
        fuckNewArray.push(array[i])
    }
    console.log(...fuckNewArray)
}

function fuckingLoopTest(arrayOfFuck){
    fuckedArray = []
    for(let i = 1; i<= arrayOfFuck.length; i++){
        if(arrayOfFuck[i-1] == "add"){fuckedArray.push(i); continue}
        fuckedArray.pop()
    }
    fuckedArray.length == 0 ? console.log("Empty") : console.log(...fuckedArray)
}

function unLogicalRotation(arrayOfIlusion){
    lastEllementEater = Number(arrayOfIlusion.pop())
    for(let i = 1; i <= lastEllementEater; i++){
        packmanIsHere = arrayOfIlusion.pop()
        arrayOfIlusion.unshift(packmanIsHere)
    }
    console.log(...arrayOfIlusion)
}

function fuckFuckArray(array){
    unstoppableMegaPowerVariable = array[0]
    fuckedArray = []
    fuckedArray.push(unstoppableMegaPowerVariable)
    for(let fuckmachine = 1; fuckmachine < array.length; fuckmachine++){
        array[fuckmachine] >= unstoppableMegaPowerVariable ? (
            unstoppableMegaPowerVariable = array[fuckmachine],
            fuckedArray.push(unstoppableMegaPowerVariable)
        ) : undefined
    }
    console.log(...fuckedArray)
}

function tseam () {
    let gamer = {
        list : [],
        Install : (game) => {
            if(!gamer.list.includes(game)){gamer.list.push(game)}
        },
        Uninstall : (game) => {
            if(gamer.list.includes(game)){gamer.list = gamer.list.filter(item => item != game)}
        },
        Update : (game) => {
            if(gamer.list.includes(game)){
                gamer.list = gamer.list.filter(item => item != game)
                gamer.list.push(game)
            }
        },
        Expansion : (game) => {
            game = game.split("-")
            
            if(gamer.list.includes(game[0])){
                for(let i = 0; i < gamer.list.length; i ++){
                    if(gamer.list[i] == game[0]){
                        game = game.join(":")
                        gamer.list.splice(i+1,0,game)
                        break;
                    }
                }
            }
        }
    }
    gamer.list = arguments[0].shift().split(" ")
    arguments[0].pop()
    for(let game of arguments[0]){
        game = game.split(" ")
        gamer[game[0]](game[1])
    }
    console.log(...gamer.list)
}

function magic(cube){
    const magicNumber = cube[0].reduce((x,y) => x + y, 0)
    for(i = 0; i< cube.length; i ++){
        verticalsum = 0
        horizontalsum = cube[i].reduce((x,y) => x + y, 0)
        for(let j = 0; j < cube.length; j++){verticalsum += cube[j][i]}
        if(verticalsum != magicNumber || horizontalsum != magicNumber){return console.log(false)}
    }
    return console.log(true)
}

function spiral(x,y){
    matrix = new Array(y)
    for(let i = 0; i < matrix.length; i ++){
        matrix[i] = new Array(x)
    }
    x1 = x
    y1 = y
    xPosition = 0
    yPosition =0
    move = "right"

    for(let i = 1; i<=x * y; i++){
        if(move == "right"){
            matrix[yPosition][xPosition] = i
            if(xPosition + 1 == x1){
                move = "down"
                yPosition++
                continue
            }else{
                xPosition++
                continue
            }
        }
        if(move == "down"){
            matrix[yPosition][xPosition]=i
            if(yPosition + 1 == y1){
                move = "left"
                xPosition--
                y1 -= 1
                continue
            }else{
                yPosition++
                continue
            }
        }
        if(move == "left"){
            matrix[yPosition][xPosition]=i
            if(xPosition - 1 < x - x1){
                move = "up"
                yPosition--
                x1 -= 1
                continue
            }else{
                xPosition--
                continue
            }
        }
        if(move == "up"){
            matrix[yPosition][xPosition]=i
            if(yPosition - 1 < y - y1){
                move = "right"
                xPosition++
                continue
            }else{
                yPosition--
                continue
            }
        }
    }
    for(let i = 0; i < matrix.length; i ++){
        console.log(...matrix[i])
    }
}

function diagonal(input){
    let matrix = []
    diagonal1 = 0
    diagonal2 = 0
    while(input.length > 0){
        matrix[input.length - 1] = input.pop().split(" ").map(Number)
    }
    for(let i = 0; i< matrix.length; i++){
        diagonal1 += matrix[i][i]
        diagonal2 += matrix[i][matrix.length - (1 +i)]
    }
    if(diagonal1 == diagonal2){
    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j< matrix.length; j++){
            if(j == i || j == matrix.length - (1 +i)){
                continue
            }else{
                matrix[i][j] = diagonal1
            }
        }
    }
    }
    for(let row of matrix){
    console.log(...row)}
} 

function orbit(size){
    x = size[0]
    y = size[1]
    matrix = new Array(y)
    x1 = size[2]
    y1 = size[3]
    if(x1>=x || y1>=y){return}
    for(let i = 0; i < y; i++){
        matrix[i] = new Array(x)
    }
    for(let i = 0; i <y; i++){
        for(let j = 0;j < x; j++){
            if(i == x1 && j == y1){ matrix[i][j] = 1; continue}
            if(Math.abs(i - x1) >= Math.abs(j - y1)){
                matrix[i][j] =  Math.abs(i - x1) +1
            }else{
                matrix[i][j] =  Math.abs(j - y1) +1
            }
        }
    }
    for(let row of matrix){
    console.log(...row)}
}

orbit([5, 5,
    4, 3])