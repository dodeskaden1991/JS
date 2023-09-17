function equal(imput){
    counter = 0
    for(argument of imput){
        for(let i=0; i<argument.length; i++){
            if(argument[i]==argument[i+1]){counter++}
        }
    }
    for(let i=0; i< imput[0].length; i++){
        for(let j=0; j< imput.length - 1; j++){
            if(imput[j][i] == imput[j+1][i]){counter++}
        }
    }
    console.log(counter)
} 

function bunny(){
    function bombBOOM(game, damage, position){
        const min = 0
        const max = game.body[0].length - 1
        let maxI = -1
        for(arguments of game.body){
            maxI++
        }
        if(game.body[position[0]][position[1]] != 0){
            if(game.body[position[0]][position[1]] > 10000){game.body[position[0]][position[1]] = 10000}
            game.damage += Number(game.body[position[0]][position[1]])
            game.kills ++
            for(let i = -1; i < 2; i++){
                for(let j = -1; j<2; j++){
                    if((position[0] + i >= min && position[0] + i <= maxI) && (position[1] + j  >= min && position[1] + j <= max)){
                        if(game.body[position[0] + i][position[1] + j] != 0){game.body[position[0] + i][position[1] + j] -= damage}
                        if(game.body[position[0] + i][position[1] + j] < 0){game.body[position[0] + i][position[1] + j] = 0}
                    }
                }
            }
        }
        return game
    }

    function bunnySlayer(game){
        let i = 0
        const max = game.body[0].length
        for(argument of game.body){
            for(let j = 0; j < max; j++){
                if(game.body[i][j] > 0){
                    if(game.body[i][j] > 10000){game.body[i][j]=10000}
                    game.damage += Number(game.body[i][j])
                    game.kills ++
                }
            }
            i++
        }
        return game
    }
    
    game = {
        bomb : 0,
        body : [],
        damage : 0,
        kills : 0
    }
    game.bomb = arguments[0].pop().split(" ")
    
    for(let argument of arguments[0]){
        game.body.splice(0,0,argument.split(" "))
    }
    game.body.reverse()

    while(game.bomb.length > 0){
        
        position = game.bomb.splice(0,1)
        position = position[0].split(",").map(Number)
        if(game.body[position[0]] == undefined){continue}
        if(game.body[position[0]][position[1]] == undefined){continue}
        damage = Number(game.body[position[0]][position[1]])
        damage > 10000 ? damage=10000 : undefined
        game = bombBOOM(game,damage,position)
        
    }
    
    game = bunnySlayer(game)
    
    console.log(game.damage)
    console.log(game.kills)
}

function air(body, position){
    let action = [
        {
            item : 'breeze',
            do : (x) => {
                body[x] = body[x].map(x => x - 15)
            }
        },
        {
            item : 'gale',
            do : (x) => {
                for(let i = 0; i < body.length; i++) {
                    body[i][x] -= 20
                }
            }
        },
        {
            item : 'smog',
            do : (x) => {
                body = body.map(element => 
                    element.map(item => Number(item) + Number(x))
                );
            }
        }
    ]
    for(let i = 0; i < body.length; i++){
        body[i] = body[i].split(" ")
    }
    for(type of position){
        type = type.split(" ")
        let airforce = type[0]
        let todo = type[1]
        let match = action.find((x) => x.item == airforce)
        if(match){
            match.do(todo)
        }
        body = body.map((row) => row.map(x => x < 0 ? x = 0 : x))
    }
    let result = new Array
    body.forEach((row, rowIndex) => {
        row.forEach((item,colIndex) =>{
            if(item >= 50){result.push(`[${[rowIndex, colIndex].join("-")}]`)}
        })
    })
    if(result.length > 1){
        console.log(`Polluted areas: ${result.join(", ")}`)
    }else if(result.length > 0){
        console.log(`Polluted areas: ${result}`)
    }else{
        console.log("No polluted areas")
    }
}

air(
    ["0 0 0 0 0", "0 0 0 0 0", "0 0 0 0 0", "0 0 0 0 0", "0 0 0 0 0"],
    [" breeze 0", "breeze 1", "breeze 2", "breeze 3", "breeze 4", "smog 50"]
  )
