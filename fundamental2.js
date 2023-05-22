//обещавам спирам да правя глупави гешки :D 
function ages(years){
    if(years < 0){console.log(`out of bounds`); return;}
    if(years>= 0 && years <= 2){
        console.log(`baby`);
    }else if(years <= 13){
        console.log(`child`);
    }else if(years <= 19){
        console.log(`teenager`);
    }else if(years <= 65){
        console.log(`adult`);
    }else{
        console.log(`elder`);
    }
}

function roading(x,fix){
    if (fix > 15){fix = 15}
    console.log(parseFloat(x.toFixed(fix)))
    
}

function division(number){
    let divisor = [10,7,6,3,2];
    for(let i = 0; i < divisor.length; i++){
        if(number % divisor[i] == 0){console.log(`The number is divisible by ${divisor[i]}`);return;}
    }
    console.log(`Not divisible`)
}

function vacantion(people,type,day){
    const price = {
        'Friday': {
            'Students': 8.45,
            'Business': 10.9,
            'Regular': 15
        },
        'Saturday': {
            'Students': 9.8,
            'Business': 15.6,
            'Regular': 20
        },
        'Sunday': {
            'Students': 10.46,
            'Business': 16,
            'Regular': 22.5
        }
    }
    let sum = people * price[day][type];
    if(people >= 30 && type == "Students"){sum *= 0.85}
    if(people >= 100 && type == "Business"){sum -= 10*price[day][type]}
    if(people >= 10 && people <= 20 && type == "Regular"){ sum *= 0.95}
    console.log(`Total price: ${sum.toFixed(2)}`)
}

function leapYear(year){
    if(year > 0){
        if(year % 4 == 0 && (year % 100 != 0  || year % 400 == 0)){console.log(`yes`)}
        else{console.log(`no`)}
    }
}

function  printAndSum(start,stop){
    let numbers = ""
    let sum = 0;
    for(let i = start; i <= stop; i++){
        sum += i;
        numbers += `${i} `
    }
    console.log(numbers)
    console.log(`Sum: ${sum}`)
}

function constraints(numbers){
    for(let i =1; i<= numbers; i++){
        let result = ""
        for(let j=1; j<=i; j++){
            result += `${i} `
        }
        console.log(result)
    }
}

function multiplicationTable(number){
    for(let i = 1; i <= 10; i++){
        console.log(`${number} X ${i} = ${number*i}`)
    }
}

function login(input){
    let database = [...input];
    let userName = database[0];
    let errorChecker = 0
    for (let i = 1; i < database.length; i++){
        let dataSwitch = "";
        let databaseWord = database[i];
        let counter = database[i].length;
        while(counter>0){
            dataSwitch += databaseWord[counter - 1];
            counter --;
        }
        if(userName == dataSwitch){
            console.log(`User ${userName} logged in.`); return;
        }else
            errorChecker ++
            if(errorChecker == 4){console.log(`User ${userName} blocked!`); return}
            console.log(`Incorrect password. Try again.`);            
        }        
}

function loginV2(database){
    let userName = database[0];
    let dataSwitch = userName.split("").reverse().join("");
    let errorChecker = 0
    for (let i = 1; i < database.length; i++){
        let databaseWord = database[i];
        if(databaseWord == dataSwitch){
            console.log(`User ${userName} logged in.`); return;
        }else
            errorChecker ++
            if(errorChecker == 4){console.log(`User ${userName} blocked!`); return}
            console.log(`Incorrect password. Try again.`);            
        } 
}

function bitcoinMine(days){
    const price = {
        'bitcoin': 11949.16,
        'gold': 67.51
    }
    let money = 0;
    let bitCoins = 0;
    let firstPurch = 0;
    for(let i = 0; i < days.length; i++){
        if ((i+1) % 3 == 0){
            money += (days[i] * price['gold'] * 0.7);
        }else{
            money += days[i] * price['gold'];
        }        
        while(money >= price['bitcoin']){
            money -= price['bitcoin'];
            bitCoins ++
            if(firstPurch == 0){firstPurch = i + 1}
        }
    }
    console.log(`Bought bitcoins: ${bitCoins}`)
    if(firstPurch != 0){
        console.log(`Day of the first purchased bitcoin: ${firstPurch}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

function pyramyd(base, increment){
    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    counter = 1;
    pyramidHeight=0;
    while(base >=1 ){
        if(counter == 5 && base > 2){
            lapis += base * 4 - 4
            stone += base*base - (base*4 - 4)
            counter = 0;
        }else if(base <=2){
            gold += base*base;
        }else{
            marble += base * 4 - 4
            stone += base*base - (base*4 - 4)
        }
        base -= 2;
        pyramidHeight ++;
        counter ++;
    }
    console.log(`Stone required: ${Math.ceil(stone*increment)}`);
    console.log(`Marble required: ${Math.ceil(marble*increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis*increment)}`);
    console.log(`Gold required: ${Math.ceil(gold*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight*increment)}`);
}

//от бинг
function pyramyd2(base, increment) {
    const BASE_DECREMENT = 2;
    const LAPIS_INTERVAL = 5;
    const OUTER_LAYER = 4;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let pyramidHeight = 0;
        while (base >= 1) {
            let outerLayer = base * OUTER_LAYER - OUTER_LAYER;
            let innerLayer = base * base - outerLayer;
            if (base <= 2) {
                    gold += base * base;
            } else {
                    if (pyramidHeight % LAPIS_INTERVAL == LAPIS_INTERVAL - 1) {
                    lapis += outerLayer;
                    } else {
                        marble += outerLayer;
                    }       
                   stone += innerLayer;
            }
            base -= BASE_DECREMENT;
            pyramidHeight++;
        }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}
bitcoinMine([10000, 200, 300])
solve([10000, 200, 300])