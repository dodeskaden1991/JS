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

bunny(['10 10 10 10',
'0,1'])