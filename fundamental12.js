//More Exercise: Functions
function carWash(todo){    
    let value = [        
        {
            item : 'soap',
            do : (car) => car += 10
        },
        {
            item : 'water',
            do : (car) => car*1.2
        },
        {
            item : 'vacuum cleaner',
            do :  (car) => car*1.25
        },
        {
            item : 'mud',
            do : (car) => car*0.9
        }        
    ]
    let car = 0;    
    for(let type of todo){
        match = value.find((x) => x.item == type)
        if(match){car = match.do(car)}
    }
    return car = `The car is ${car.toFixed(2)}% clean.`     
}

function modification(number){
    sum = number.toString().split("").map(Number).reduce((x,y) => x + y,0)
    numberLength = number.toString().split("").length 
    
    if(sum / numberLength > 5){return console.log(number)}
    else{
        number = number.toString().split("")
        number.push("9")
        number = Number(number.join(''))
        modification(number)  
    }
} 

function points() {
    x1 = arguments[0][0]
    y1 = arguments[0][1]
    x2 = arguments[0][2]
    y2 = arguments[0][3]
    function pitagory(x1, y1, x2, y2){
        result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        result % 1 === 0 ? result = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : result = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
        return result
    }
    console.log(pitagory(x1, y1, 0, 0))
    console.log(pitagory(x2, y2, 0, 0))
    console.log(pitagory(x1, y1, x2, y2))
}

function  radioCrystals(){
    theCrystal = Array.from(...arguments).shift();
    crystals = Array.from(...arguments).slice(1)
    crystalModifited = {
        'Cut' : 0,
        'Lap' : 0,
        'Grind' : 0,
        'Etch' : 0,
        'X-ray' : 0,
    }
    crystalModifucation = [
        {
            item : 'Cut',
            do : (crystal) => Math.trunc(crystal / 4)
        },
        {
            item : 'Lap',
            do : (crystal) => Math.trunc(crystal * 0.8)
        },
        {
            item : 'Grind',
            do : (crystal) => crystal -= 20
        },
        {
            item : 'Etch',
            do : (crystal) => crystal -= 2
        },
        {
            item : 'X-ray',
            do : (crystal) => crystal += 1
        }
    ]
    while(crystals.length > 0){
        let currentCrystal = Array.from(crystals).shift()
        crystals.shift()
        if(currentCrystal <= theCrystal -2 || currentCrystal == theCrystal){continue}
        console.log(`Processing chunk ${currentCrystal} microns`)
        let crystalFactory = function(){
            let minimumofCrystal = Infinity
            let modificationType = null
            for(let modification of crystalModifucation){
                let newValue = modification.do(currentCrystal);
                if(newValue < theCrystal - 1){continue}
                if(newValue == theCrystal){
                    minimumofCrystal = newValue
                    modificationType = modification.item
                    break;
                }
                if(newValue == theCrystal - 1){
                    minimumofCrystal = newValue
                    modificationType = modification.item
                    crystalModifited['X-ray'] ++
                    break
                }
                if(newValue < minimumofCrystal){
                    minimumofCrystal = newValue
                    modificationType = modification.item
                }
            }
            if(minimumofCrystal == Infinity){return}
            crystalModifited[modificationType] ++ 
            currentCrystal = minimumofCrystal
            if(currentCrystal > theCrystal){crystalFactory()}
            else{return}         
        }
        crystalFactory()
        for(result in crystalModifited){
            if(crystalModifited[result] != 0){
                console.log(`${result} x${crystalModifited[result]}`)
                if(result != "X-ray"){console.log(`Transporting and washing`)}
                crystalModifited[result] = 0
            }
        }
        console.log(`Finished crystal ${theCrystal} microns`)
    }
}

function dna(number){
    let structure = {
        1 : ['A', 'T'],
        2 : ['C', 'G'],
        3 : ['T', 'T'],
        4 : ['A', 'G'],
        5 : ['G', 'G'],
    }
    let dnaPrint = function([x,y],type){
        switch(type){
            case 1:
                return console.log(`**${x}${y}**`)
            case 2:
                return console.log(`*${x}--${y}*`)
            case 3:
                return console.log(`${x}----${y}`)
            case 4:
                return console.log(`*${x}--${y}*`)
        }
    }
    for(let i = 1; i<= number; i++){
        let currentStructure = i
        let currentType = i
        while(currentStructure > 5){currentStructure -= 5}
        while(currentType > 4){currentType -= 4}
        currentStructure = structure[currentStructure]
        dnaPrint(currentStructure,currentType)
    }
} 

dna(5)
