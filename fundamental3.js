function sortNumbers(...numbers){
    numbers.sort((a, b) => b - a)
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
    }
    
}

function lastDigit(number){
    let a = number % 10
    switch (a){
        case 0 : console.log(`zero`); break;
        case 1 : console.log(`one`); break;
        case 2 : console.log(`two`); break;
        case 3 : console.log(`three`); break;
        case 4 : console.log(`four`); break;
        case 5 : console.log(`five`); break;
        case 6 : console.log(`six`); break;
        case 7 : console.log(`seven`); break;
        case 8 : console.log(`eight`); break;
        case 9 : console.log(`nine`); break;
    }
}

 function nextDay(year,mounth,day){
    let today = new Date(year,mounth-1,day)
    let tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1)
    console.log(tomorrow.getFullYear() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getDate())
 }

 function reverse(string){
    let reversed = string.split("").reverse().join("");
    console.log(reversed)
 }

 function points(...coordinats){
    let result = Math.pow(Math.abs(coordinats[0]-coordinats[2]),2) + Math.pow(Math.abs(coordinats[1]-coordinats[3]),2)
    console.log(Math.sqrt(result))
 }

points(2.34, 15.66, -13.55, -2.9985)