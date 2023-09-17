//More Exercises: Data Types and Variables
function digits(word){
    const result = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    result.hasOwnProperty(word) ? console.log(result[word]) : undefined
}

function primary(number){
    primaryChecker = number - 1
    while(primaryChecker>=0){
        if(primaryChecker <= 1){
            console.log("true")
            return;
        }else if(number % primaryChecker == 0){
            console.log("false")
            return;
        }
        primaryChecker --
    }
}

function cone(radius, height){
    const parametry = {
        V: {
            result: (r, h) => {
                return (1/3)*Math.PI*Math.pow(r,2)*h
            }
        },
        S: {
            result: (r, h) => {
                return Math.sqrt(Math.pow(r,2)+Math.pow(h,2))
            }
        },
        L: {
            result: (r) => {
                return Math.PI * r * parametry.S.result(radius,height)
            }
        },
        B: {
            result: (r) => {
                return Math.PI * Math.pow(r,2)
            }
        },
        A: {
            result: (r, h) => {
                return parametry.L.result(radius) + parametry.B.result(radius)
            }
        },
    }
    console.log(`volume = ${parametry["V"].result(radius,height).toFixed(4)}`)
    console.log(`area = ${parametry["A"].result(radius,height).toFixed(4)}`)
}

function biggest(){
    console.log(Math.max(...arguments))
} 

function binary(number){
    console.log(parseInt(number,2))
}

function chessBoard(parametry){
    const board = {
        black: () => {
            let color = "black"
            for(let i = 1; i <= parametry; i++){
                console.log(`\t\t<span class="${color}"></span>`)
                color == "black" ? color = "white" : color = "black"
            }
        },
        white: () => {
            let color = "white"
            for(let i = 1; i <= parametry; i++){
                console.log(`\t\t<span class="${color}"></span>`)
                color == "white" ? color = "black" : color = "white"
            }
        }
    }
    console.log(`<div class="chessboard">`)
    for(let i = 1; i<= parametry; i++){
        console.log("\t<div>")
        i % 2 != 0 ? board.black() : board.white()
        console.log("\t</div>")
    }
    console.log("</div>")
}

function triangleArea(a,b,c){
    let p = (a + b + c) / 2
    console.log(Math.sqrt(p*(p-a)*(p-b)*(p-c)))
}

chessBoard(5)