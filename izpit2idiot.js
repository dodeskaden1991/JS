function moon(input){
    a = [...input];
    a = a.map(Number);
    console.log(Math.ceil((384400 / a[0] * 2)) + 3);
    console.log(((384400 / 100) * a[1])*2);
}

function odiseya(input){
    a = [...input];
    a = a.map(Number);
    let korab = a[0] * a[1] * a[2];
    let persons = 2 * 2 * (a[3] + 0.4);
    if (korab / persons < 3){
        console.log("The spacecraft is too small.");
    } else if(korab / persons > 10){
        console.log("The spacecraft is too big.");
    } else{
        console.log(`The spacecraft holds ${Math.floor(korab / persons)} astronauts.`)
    }
}

function greda(input){
    a = [...input];
    a[2] = Number(a[2]);

    const stoka =  {
        'Argentina' : {
            'flags' : 3.25,
            'caps' : 7.2,
            'posters' : 5.1,
            'stickers' : 1.25,
        },
        'Brazil' : {
            'flags' : 4.2,
            'caps' : 8.5,
            'posters' : 5.35,
            'stickers' : 1.2,
        },
        'Croatia' : {
            'flags' : 2.75,
            'caps' : 6.9,
            'posters' : 4.95,
            'stickers' : 1.1,
        },
        'Denmark' : {
            'flags' : 3.1,
            'caps' : 6.5,
            'posters' : 4.8,
            'stickers' : 0.9,
        }
    }
    if(!Boolean(stoka[a[0]])){
        console.log("Invalid country!");
        return;
    }
    if(!Boolean(stoka[a[0]][a[1]])){
        console.log("Invalid stock!");
        return;
    }
    console.log(`Pepi bought ${a[2]} ${a[1]} of ${a[0]} for ${(a[2] * stoka[a[0]][a[1]]).toFixed(2)} lv.`);
}

function pisanki(input){
    a = [...input];
    a = a.map(Number);
    let small = 0;
    let medium = 0;
    let big = 0;
    let food = 0;
    for(let i =1; i<= a[0]; i++){
        if(a[i] >= 100 && a[i] < 200){small ++; food += a[i];}
        if(a[i] >= 200 && a[i] < 300){medium ++; food += a[i];}
        if(a[i] >= 300 && a[i] < 400){big ++; food += a[i];}
    }
    food = food / 1000;
    console.log(`Group 1: ${small} cats.
Group 2: ${medium} cats.
Group 3: ${big} cats.
Price for food per day: ${(food * 12.45).toFixed(2)} lv.`);
}

function puppy(input){
    a = [...input];
    a = a.map( (x ,y) =>
                        {
                            if (isNaN(x))
                            {
                                return x;
                            }
                            else
                            {
                                return Number(x);
                            }
                        });
    let food = 0;
    let index = 1;
    while(a[index] !== "Adopted"){food += a[index]; index++;}
    if(food <= a[0] * 1000){
        console.log(`Food is enough! Leftovers: ${a[0]*1000 - food} grams.`)
    }else{
        console.log(`Food is not enough. You need ${food - a[0] * 1000} grams more.`)
    }
}

function golddigger2(input){
    let a = [...input];
    a = a.map(Number);
    process.stdout.write("Здравейте, ");
    for (let i = 1; i < a.length; i++){
        let income = 0;
        let sredno = a[i]
        let day = a[i+1]
        let index = 1;
        while(index <= day){
            income += a[i + 1 + index];
            index++;
        }
        if(sredno <= income / day){console.log(`Good job! Average gold per day: ${(income / day).toFixed(2)}.`)}
        else{console.log(`You need ${(sredno - income / day).toFixed(2)} gold.`)}
        i += index;
    }
}

function golddigger(input){
    const a = [...input].map(Number);
    for (let i = 1; i < a.length; i++){
    let income = 0;
    const sredno = a[i];
    const day = a[++i];
    for (const gold of a.slice(i + 1, i + 1 + day)){
    income += gold;
    }
    if(sredno <= income / day){console.log(`Good job! Average gold per day: ${(income / day).toFixed(2)}.`)}
    else{console.log(`You need ${(sredno - income / day).toFixed(2)} gold.`)}
    i += day;
    }
    }

golddigger2(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])








