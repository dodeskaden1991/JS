function day(input){
    a = Number(input[0]);
    switch (a){
        case 1: console.log("Monday"); return;
        case 2: console.log("Tuesday"); return;
        case 3: console.log("Wednesday"); return;
        case 4: console.log("Thursday"); return;
        case 5: console.log("Friday"); return;
        case 6: console.log("Saturday"); return;
        case 7: console.log("Sunday"); return;
        default: console.log("Error"); return;
    }
}

function day2(input){
    a = input[0];
    switch (a){
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday": console.log("Working day"); return;
        case "Saturday":
        case "Sunday": console.log("Weekend"); return;
        default: console.log("Error"); return;
    }
}

function animal(input){
    a = input[0];
    switch (a){
        case "dog": console.log("mammal"); return;
        case "crocodile": 
        case "tortoise": 
        case "snake": console.log("reptile"); return;
        default: console.log("unknown"); return;
    }
}

function sex(input){
    a = [...input];
    if (a[1] == "m"){
        if(a[0] < 16){
            console.log("Master");
        }else{
            console.log("Mr.")
        }
    }else{
        if(a)if(a[0] < 16){
            console.log("Miss");
        }else{
            console.log("Ms.")
        }
    }
}

function shop2(art,city,sum){
    const prices = {
        'Plovdiv': {
            'coffe': 0.4,
            'water': 0.2,
            'peanuts': 2.1
        },
        Sofia: {
            coffe: 0.4,
            water: 0.2,
            peanuts: 2.1
        },
        Varna: {
            coffe: 0.4,
            water: 0.2,
            peanuts: 2.1
        }
    }
    console.log(prices[city][art]*sum)
}

function shop(input){
    let a = [...input];
    a[2] = Number(a[2]);
    const prices = {
        'Sofia': {
            'coffee': 0.5,
            'water': 0.8,
            'peanuts': 1.6,
            'beer': 1.2,
            'sweets': 1.45
        },
        'Plovdiv': {
            'coffee': 0.4,
            'water': 0.7,
            'peanuts': 1.50,
            'beer': 1.15,
            'sweets': 1.3
        },
        'Varna': {
            'coffee': 0.45,
            'water': 0.7,
            'peanuts': 1.55,
            'beer': 1.1,
            'sweets': 1.35
        }
    }
    // if (prices.hasOwnProperty(a[1]) && prices[a[1]].hasOwnProperty(a[0])) 
    if(Boolean(prices[a[1]]) != false && Boolean(prices[a[1]][a[0]]) != false){
        console.log(prices[a[1]][a[0]] * a[2]);
    }else{
        console.log("false");
    }
    
}

function range(input){
    let a = Number(input);
    if (a>= -100 && a<= 100 && a != 0) {console.log("Yes");}
    else{console.log("No");}
}

function firm(input){
    let hour = (input[0]);
    let day = (input[1]);
    switch (day){
        case "Monday": ;
        case "Tuesday": ;
        case "Wednesday": ;
        case "Thursday": ;
        case "Friday": ;
        case "Saturday": if(hour >=10 && hour <= 18){console.log("open"); return;} ;
    }
    console.log("closed")
}

function film(input){
    day = (input[0])
    switch (day){
        case "Wednesday": ;
        case "Thursday": console.log("14"); return; ;

        case "Sunday": ;
        case "Saturday": console.log("16"); return; ;

        default: console.log("12"); return; ;
        }
 }

 function food(input){
    let a = (input[0]);
    const articul = {
        'banana': "fruit",
        'apple': "fruit",
        'kiwi': "fruit",
        'cherry': "fruit",
        'lemon': "fruit",
        'grapes': "fruit",
        'tomato': "vegetable",
        'cucumber': "vegetable",
        'pepper': "vegetable",
        'carrot': "vegetable",
    }
    if(Boolean(articul[a]) != false){console.log(articul[a])}
    else{console.log("unknown")}
}

function  check(input){
    a = Number(input[0]);
    if((a< 100 || a> 200) && a != 0){console.log("invalid")}
}

function news(){
    let a = "12345asdfg";
    console.log(parseInt(a)) 
    console.log(parseFloat(a)) 
}

check(["1"]);
news();