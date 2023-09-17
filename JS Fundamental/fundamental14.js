//Arrays Advanced - Exercise

function train(input){
    vagons = input.shift().split(' ').map(Number);
    max = Number(input.shift());
    for(type of input){
        let doing = type.split(' ');
        if(doing.length > 1){
            vagons.push(doing[1])
        }else{
            for(now of vagons){
                if(now + Number(doing[0]) > max){
                    continue;
                }else{
                    element = vagons.indexOf(now)
                    vagons[element] += Number(doing[0]);                    
                    break;
                }
            }
        }
    }    
    console.log(...vagons)
}

function distinct(numbers){
    numbers2 = []
    for(let i=0; i<numbers.length; i++){
        let temp = numbers.slice(0,i);
        match = temp.includes(numbers[i]);
        if(!match){
            numbers2.push(numbers[i]);
        }
    }
    console.log(...numbers2)
}

//by veselin
function distinct2(input){
    return arr = input.filter((item, index, array) => array.indexOf(item) === index).join(" ");
}

function house(type){
    let list = []
    for(types of type){
        if(!types.includes('not')){
            let name = types.split(" ")[0]
            if(!list.includes(name)){
                list.push(name)
            }else{
                console.log(`${name} is already in the list!`)
            }
        }else{
            let name = types.split(" ")[0]
            if(!list.includes(name)){
                console.log(`${name} is not in the list!`)
            }else{
                let index = list.indexOf(name)
                list.splice(index,1)
            }
        }
    }
    console.log(list.join("\n"))
}

function sorting(numbers){
    numbers.sort((a,b) => b - a) 
    for(let i = 0; i < numbers.length; i++){
        if(i % 2 != 0){
            let swap = numbers.pop()
            numbers.splice(i,0,swap)
        } 
    }
    console.log(...numbers)
}

function  SortAnArray(array){    
    console.log(array.sort((a,b) => a.length - b.length || a.localeCompare(b)).join("\n"))
}

function bomb(array,bombtype){
    bombPower = bombtype[0]
    bombRadius = bombtype[1]
    while(array.includes(bombPower)){
        let index = array.indexOf(bombPower)
        let min = index - bombRadius;
        let max = index + bombRadius;
        min < 0 ? min = 0 : undefined;
        max > array.length - 1 ? max = array.length - 1 : undefined;
        for(min; min <= max; min++){
            array[min] -= bombPower;}
        array = array.filter((x) => x>0)
    }
    console.log(array.reduce((x,y) => x + y, 0))
}

function search(array,metod){
    array = array.slice(0,metod[0])
        .slice(metod[1])
        .filter((x) => x === metod[2])
    console.log(`Number ${metod[2]} occurs ${array.length} times.`)
}

function manipulator(items,metod){
    let manipulate = [
        {
            item : 'add',
            do : (x) => {
                x = x.split(' ')
                x.shift()
                index = x.shift()
                number = x.map(Number)
                items.splice(index,0,...number)
            }
        },
        {
            item : 'addMany',
            do : (x) => {
                x = x.split(' ')
                x.shift()
                start = x.shift()
                x = x.map(Number)
                items.splice(start,0,...x)
            }
        },
        {
            item : 'contains',
            do : (x) => {
                x = x.split(' ')
                x.shift() 
                y = items.indexOf(Number(x))
                console.log(y)
            }
        },
        {
            item : 'remove',
            do : (x) => {
                x = x.split(' ')
                x.shift()
                items.splice(x,1)
            }
        },
        {
            item : 'shift',
            do : (x) => {
                x = x.split(' ')
                x.shift()
                while(x > items.length){x -= items.length}
                y = items.splice(0,x)
                items = items.concat(y)
            }
        },
        {
            item : 'sumPairs',
            do : (x) => {
                one = items.filter((x,y) => (y % 2 == 0))
                two = items.filter((x,y) => (y % 2 != 0))
                result = one.map((x,y) => x + (two[y] || 0))
                items = result
            }
        },
        {
            item : 'print',
            do : (x) => {
                console.log(`[ ${items.join(", ")} ]`)
            }
        }
    ]
    for(metods of metod){
        current = metods.split(" ").shift();
        match = manipulate.find((x) => x.item === current);
        if(match){
            match.do(metods)
        }
    }
} 

function gladiator(input){
    let action = [
        {
            item : 'Buy',
            do : (x) => {
                if(!inventory.includes(...x)){
                inventory.push(...x);}
            }
        },
        {
            item : 'Trash',
            do : (x) => {
                if(inventory.includes(...x)){
                    index = inventory.indexOf(...x);
                    inventory.splice(index, 1);
                }
            }
        },
        {
            item : 'Repair',
            do : (x) => {
                if(inventory.includes(...x)){
                    index = inventory.indexOf(...x);
                    inventory.splice(index, 1)
                    inventory.push(...x);
                }
            }
        },
        {
            item : 'Upgrade',
            do : (x) => {
                x = x.toString().split("-");
                item = x.shift();
                upgrade = x.shift();
                if(inventory.includes(item)){
                    index = inventory.indexOf(item);
                    inventory.splice(index + 1, 0,`${item}:${upgrade}`)
                }
            }
        },
    ]
    inventory = input.shift().split(" ")
    for(items of input){
        actionItem = items.split(" ")
        actionDo = actionItem.shift()
        match = action.find((x) => x.item === actionDo)
        if(match){match.do(actionItem)}
    }
    return inventory.join(" ")
}

function wall(input){
    let some = []    
    while(input.length > 0){
        input = input.map((x) => x +1).filter((x) => x <= 30)
        some.push(input.length * 195)
    }
    some.pop()
    sum  = some.reduce((x,y) => x + y, 0) * 1900
    return (`${some.join(", ")}\n${sum} pesos`)
}

console.log(wall([21, 25, 28] ))