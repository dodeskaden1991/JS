function sum(input){
    console.log(input.at(0)+input.at(-1))
    console.log(input[0]+input[input.length-1])
}

function week(number){
    const days = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }
    if(days.hasOwnProperty(number)){console.log(days[number])}
    else{console.log("Invalid day!")}
}

function reverse(n,array){
    let newArray = array.slice(0,n).reverse().map(Number)
    console.log(...newArray)
} 

function inPlace(array){
    console.log(...array.reverse())
}

function even(numbers){
    console.log(numbers.map(Number).reduce((x,y) => {
        if(y % 2 == 0){return x + y}
        return x;
    },0))
}

function evenOdd(numbers){
    const type = {
        even : {
            value: (numbers) => {
                return numbers.reduce((x,y) => {
                    if(y % 2 == 0){return x + y}
                    return x;
                },0)
            }
        },
        odd : {
            value: (numbers) => {
                return numbers.reduce((x,y) => {
                    if(y % 2 != 0){return x + y}
                    return x;
                },0)
            }
        }
    }
    console.log(type["even"].value(numbers)-type["odd"].value(numbers))
}

function equal(array,array2){
    array = array.map(Number)
    array2 = array2.map(Number)
    
        for(let i = 0; i < array.length; i++){
            if(array[i] != array2[i]){
                console.log(`Arrays are not identical. Found difference at ${i} index`)
                return
            }
        }
        console.log(`Arrays are identical. Sum: ${array.reduce((a,b) => a + b,0)}`)   
}

function condense(array){
    
    function condenseRecurse(number){
    condensedArray = []
    for(let i = 0; i < number.length -1; i++){
    condensedArray.push(number[i]+number[i+1])
    }
    if(condensedArray.length>=2){condenseRecurse(condensedArray)}
    return condensedArray
    }

    array.length == 1 ? console.log(...array) : console.log(...condenseRecurse(array))
} 

condense([5])