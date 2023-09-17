//Lab: Arrays Advanced
function sum(n){
    console.log(Number(n.shift()) + Number(n.pop()))
}

function  negative(numbers){
    numbers.map(Number)
    let negatives = numbers.filter((input) => input < 0).reverse()
    let positives = numbers.filter((input) => input >= 0)
    let result = negatives.concat(positives)
    console.log(result.join('\n'))
}

function first(numbers){
    n = numbers.shift()
    console.log(...numbers.slice(0,n))
    console.log(...numbers.slice(numbers.length - n))
}

function last(count, sum){
    let result = []
    for(let i = 0; i < count; i++){
        i==0 ? result[i] = 1 : undefined
        let value = Math.max(0, i-sum)
        result[i] = result.slice(value,value+sum).reduce((x,y) => x + y)
    }
    console.log(...result)
}

function process(numbers){
    numbers = numbers.filter((a,input) => input % 2 != 0).map((x) => x * 2).reverse()
    console.log(...numbers)
} 

function smallest(numbers){
    numbers.sort((a,b) => a - b)
    console.log(...numbers.slice(0,2))
}

function list(fruits){
    fruits.sort()
        .forEach((fruit,x) => console.log(`${x+1}.${fruit}`))
} 

function array(input){
    let comands = [
        {
            id : 'Add',
            do : (x) => {
                numbers.push(x);
            }
        },
        {
            id : 'Remove',
            do : (x) => {
                while(numbers.includes(x)){
                    let key = numbers.indexOf(x)
                    numbers.splice(key,1)
                }
            }
        },
        {
            id : 'RemoveAt',
            do : (x) => {
                numbers.splice(x,1)
            }
        },
        {
            id : 'Insert',
            do : (x,y) => {
                numbers.splice(y,0,x)
            }
        }
    ]
    let numbers = input.shift().split(' ')
    for(comand of input){
        comand = comand.split(' ')
        nowComand = comand[0]
        number = comand[1]
        index = comand[2]
        match = comands.find((item) => item.id == nowComand)
        match.do(number,index)
    }
    console.log(numbers.join(' '))
}

array(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])