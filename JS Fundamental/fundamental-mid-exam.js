function burgerBus(input){
    let counter = input.shift()
    let towns = []
    let totalProfit =0
    for(let i = 0; i < counter; i++){
        towns[i] = input.splice(0,3)
    }
    counter = 1
    for(type of towns){

        profit = type[1]
        cost = type[2]
        if(counter % 5 == 0){
            profit = profit * 0.9
            console.log(`In ${type[0]} Burger Bus earned ${(profit-cost).toFixed(2)} leva. `)
            totalProfit += profit - cost
            counter ++
            continue
        }else if(counter % 3 == 0){
            cost = 1.5*cost
            console.log(`In ${type[0]} Burger Bus earned ${(profit-cost).toFixed(2)} leva. `)
            totalProfit += profit - cost
            counter ++
            continue
        }
        console.log(`In ${type[0]} Burger Bus earned ${(profit-cost).toFixed(2)} leva. `)
        totalProfit += profit - cost
        counter ++
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

function friendList(input){
    let commands = [
        {
            item : 'Blacklist',
            do : (x) => {
                if(nameList.includes(x)){
                    let y = nameList.indexOf(x)
                    console.log(`${x} was blacklisted.`)
                    nameList[y] = "Blacklisted"
                    blacklisted++
                }else{
                    console.log(`${x} was not found.`)
                }
            }
        },
        {
            item : 'Error',
            do : (x) => {
                if(nameList[x] != undefined && nameList[x] != "Blacklisted" && nameList[x] != "Lost"){
                    console.log(`${nameList[x]} was lost due to an error.`)
                    nameList[x] = "Lost"
                    lost++
                }
            }
        },
        {
            item : 'Change',
            do : (x,y) => {
                if(nameList[x] != undefined && nameList[x] != "Blacklisted" && nameList[x] != "Lost"){
                    console.log(`${nameList[x]} changed his username to ${y}.`)
                    nameList[x] = y
                }
            }
        },
        {
            item : 'Report',
            do : (x) => {
                console.log(`Blacklisted names: ${blacklisted}`)
                console.log(`Lost names: ${lost}`)
                console.log(...nameList)
            }
        }
    ]
    let nameList = input.shift().split(", ")
    let blacklisted = 0;
    let lost = 0;
    for(type of input){       
        operation = type.split(" ")
        match = commands.find((x) => x.item === operation[0])
        if(match){
                    match.do(operation[1],operation[2])
                }
    }
}

function deckOfCards(input){
    let commands = [
        {
            item : 'Add',
            do : (x) => {
                if(cardList.includes(x)){
                    console.log("Card is already in the deck" )
                }else{
                    console.log("Card successfully added" )
                    cardList.push(x)
                }
            }
        },
        {
            item : 'Remove',
            do : (x) => {
                if(cardList.includes(x)){
                    let y = cardList.indexOf(x)
                    cardList.splice(y,1)
                    console.log("Card successfully removed" )
                }else{
                    console.log("Card not found")
                }
            }
        },
        {
            item : 'Remove At',
            do : (x) => {
                if(cardList[x] != undefined){
                    cardList.splice(x,1)
                    console.log("Card successfully removed" )
                }else{
                    console.log("Index out of range")
                }
            }
        },
        {
            item : 'Insert',
            do : (x,y) => {
                if(cardList[x] != undefined){
                    if(cardList.includes(y)){
                        console.log("Card is already added")
                    }else{
                        console.log("Card successfully added" )
                        cardList.splice(x,0,y)
                    }
                }else{
                    console.log("Index out of range")
                }
            }
        }
    ]
    let cardList = input.shift().split(", ")
    numbers = input.shift()
    number = 0
    for(type of input){       
        operation = type.split(", ")[0]
        card = type.split(", ")[1]
        card2 = type.split(", ")[2]
        
        match = commands.find((x) => x.item === operation)
        if(match){
                    match.do(card,card2)
                }
        number ++
        if(number == numbers){
            break
        }
    }

    console.log(cardList.join(', ')); 
} 

deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, 0, asds", "Remove At, 1"]) 


function Biscuits(input) {
    let biscuitsPerDayPerWorker = Number(input[0])
    let countOfWorkers = Number(input[1])
    let countOfBiscuits = Number(input[2])
    
 
    let productionPerDay = biscuitsPerDayPerWorker * countOfWorkers
    let totalProductionForFactory = 0;
    let percentageDifference = 0;
    for (let day = 1; day < 31; day++) {
        if (day % 3 == 0) {
            totalProductionForFactory += (productionPerDay * 0.75)
        }
        else {
            totalProductionForFactory += productionPerDay
        }
    }
    percentageDifference = Math.abs((100 - (totalProductionForFactory / countOfBiscuits) * 100))
    console.log(`You have produced ${totalProductionForFactory} biscuits for the past month.`)
    if (totalProductionForFactory > countOfBiscuits) {
        console.log(`You produce ${percentageDifference.toFixed(2)} percent more biscuits.`)
    }
    else {
        
        console.log(`You produce ${percentageDifference.toFixed(2)} percent less biscuits.`)
    }
}
console.log("----------------------------------------------------------------")
Biscuits(["65", "12", "26000"])

function angryCat(object,position,type) {
    let left = object.slice(0,position)
    let right = object.slice(position+1)
    left = left.reduce((a,b) => a + b, 0)
    right = right.reduce((a,b) => a + b, 0)
    if(type == "cheap"){
        if(left <= right){
            console.log(`Left - ${left}`)
        }else {
            console.log(`Right - ${right}`)
        }
    }else{
        if(left >= right){
            console.log(`Left - ${left}`)
        }else {
            console.log(`Right - ${right}`)
        }
    }
}

angryCat([-2,2,1,5,9,3,2,-2,1,-1-3,3],7,'expensive')

function tax(input){
    let tax = [
        {
            item : 'family',
            do : (years,km) => {
                let price = (Math.floor(km / 3000)*12 + (50 - years * 5)).toFixed(2)
                total += Number(price)
                console.log(`A family car will pay ${price} euros in taxes.`)
            }
        },
        {
            item : 'heavyDuty',
            do : (years,km) => {
                let price = (Math.floor(km / 9000)*14 + (80 - years * 8)).toFixed(2)
                total += Number(price)
                console.log(`A heavyDuty car will pay ${price} euros in taxes.`)
            }
        },
        {
            item :'sports',
            do : (years,km) => {
                let price = (Math.floor(km / 2000)*18 + (100 - years * 9)).toFixed(2)
                total += Number(price)
                console.log(`A sports car will pay ${price} euros in taxes.`)
            }
        }
    ]
    input = input.toString().split(">>")
    total = 0
    for(car of input){
        car = car.split(" ")
        type = car.shift()
        years = car.shift()
        km = car.shift()
        match = tax.find((x) => x.item === type)
        if(match){
                    match.do(years,km)
                }else{
                    console.log(`Type ${type} not found.`)
                }
    }
    console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`)
}

tax(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ])