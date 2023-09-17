function multiply(number){
    console.log(number*2)
}

function student(name,ages,grade){
    console.log(`Name: ${name}, ages: ${ages}, Grade: ${grade.toFixed(2)}`)
}

function excellent(number){
    if(number>=5.5){
        console.log("Excellent")
    }else{
        console.log("Not excellent")
    }
}

function languagess(country){
    const table = {
        'English':{
            'England': 'English',
            'USA': 'English'
        },
        'Spanish':{
            'Spain': 'Spanish',
            'Argentina': 'Spanish',
            'Mexico': 'Spanish'
        }        
    }
        for (let property in table) {
        // if (!(country in table[property]) || !(table[property].hasOwnProperty(country)))  това проверява и двата параметра
        if (table[property].hasOwnProperty(country)) {
        console.log(table[property][country])
        return;
        }
        }
        console.log("unknown")
        
}

function month(number) {
    if(number < 1 || number > 12){
        console.log("Error!")
        return
    }
    switch (number) {
        case 1:
            console.log("January")
            break;
        case 2: 
            console.log("February")
            break;
        case 3:
            console.log("March")
            break;
        case 4: 
            console.log("April")
            break;
        case 5: 
            console.log("May")
            break;
        case 6: 
            console.log("June")
            break;
        case 7: 
            console.log("July")
            break;
        case 8: 
            console.log("August")
            break;
        case 9: 
            console.log("September")
            break;
        case 10:
            console.log("October")
            break;
        case 11: 
            console.log("November")
            break;
        default:
            console.log("December")
            break;
    }
}

function theatre (day,age) {
//     // Define symbols for days
// const WEEKDAY = Symbol('weekday');
// const WEEKEND = Symbol('weekend');
// const HOLIDAY = Symbol('holiday');

// // Define functions for prices
// function weekdayPrice(age) {
// if (age >= 0 && age <= 18) return 12;
// if (age > 18 && age <= 64) return 18;
// if (age > 64 && age <= 122) return 12;
// }

// function weekendPrice(age) {
// if (age >= 0 && age <= 18) return 15;
// if (age > 18 && age <= 64) return 20;
// if (age > 64 && age <= 122) return 15;
// }

// function holidayPrice(age) {
// if (age >= 0 && age <= 18) return 5;
// if (age > 18 && age <= 64) return 12;
// if (age > 64 && age <= 122) return 10;
// }

// // Define object for prices
// const price = {
// [WEEKDAY]: weekdayPrice,
// [WEEKEND]: weekendPrice,
// [HOLIDAY]: holidayPrice
// };

// // Define function for theatre
// function theatre(day, age) {
// // Check if the price object has the day as a key
// if (price.hasOwnProperty(day)) {
// // Check if the value is a function
// if (typeof price[day] === 'function') {
// // Call the function with the age and log the result
// console.log(price[day](age));
// }
// }
// }

    const prices = [
        {
            day: "Weekday",
            prices: (age) => {
            if (age >= 0 && age <= 18) return 12;
            if (age > 18 && age <= 64) return 18;
            if (age > 64 && age <= 122) return 12;            
            },
        },
        {
            day: "Weekend",
            prices: (age) => {
            if (age >= 0 && age <= 18) return 15;
            if (age > 18 && age <= 64) return 20;
            if (age > 64 && age <= 122) return 15;            
            },
        },
        {
            day: "Holiday",
            prices: (age) => {
            if (age >= 0 && age <= 18) return 5;
            if (age > 18 && age <= 64) return 12;
            if (age > 64 && age <= 122) return 10;            
            },
        },
        ];
        
        const match = prices.find((item) => item.day === day);
        if (match) {
            if (typeof match.prices === "function") {
                if(match.prices(age)){
                    console.log(match.prices(age) + "$")
                }else{
                    console.log("Error!")
                }
            }
        }else{
            console.log("Error!")
        }
}

theatre("Weekday2",-55)