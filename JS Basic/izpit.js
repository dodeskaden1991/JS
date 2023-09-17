function cat(input){
    let a = [...input];
    a = a.map(Number);
    let b = Number;
    b = ((100 - a[4]) / 100) *
        (a[3] /
        (
            ((a[0]/100) * a[3] / 9) +
            ((a[1]/100) * a[3] / 4) +
            ((a[2]/100) * a[3] / 4)
        ))
    console.log(b.toFixed(4))
}

function santa(input){
    let a = [...input];
    a = a.map(Number);
    if ((a[0] * (a[2] + a[3] + a[4])) <= a[1]){
        console.log(`${Math.floor(a[1] -(a[0] * (a[2] + a[3] + a[4])))} kilos of food left.`)
    }else{
        console.log(`${Math.ceil((a[0] * (a[2] + a[3] + a[4])) - a[1])} more kilos of food are needed.`)
    }
}

function final(input){
    let a = [...input];
    let totalSum = Number;
    let charity = Number;
    const exam = {
        'Bulgaria' :{
            'summer': 1 - 0.05,
            'winter': 1- 0.08
        },
        'Abroad' :{
            'summer': 1.5 * (1 - 0.1),
            'winter': 1.5 * (1 - 0.15)
        }
    }
    totalSum = Number(a[0]) * Number(a[1]) * exam[a[3]][a[2]];
    charity = totalSum * 0.75;
    console.log(`Charity - ${charity.toFixed(2)}
Money per dancer - ${((totalSum - charity) / a[0]).toFixed(2)}`);
}

function exam(input){
    let a = [...input];
    a = a.map(Number);
    let totalSum = 0;
    let top = 0;
    let average = 0;
    let low = 0;
    let fail = 0;
    for(let i = 1; i <= a[0]; i++){
        if(a[i]<3){fail++}
        else if(a[i]<4){low++}
        else if(a[i]<5){average++}
        else{top++}
        totalSum += a[i]
    }
    console.log(`Top students: ${(top / a[0] * 100).toFixed(2)}%
Between 4.00 and 4.99: ${(average / a[0] * 100).toFixed(2)}%
Between 3.00 and 3.99: ${(low / a[0] * 100).toFixed(2)}%
Fail: ${(fail / a[0] * 100).toFixed(2)}%
Average: ${(totalSum / a[0]).toFixed(2)}`)
}

function vacantion(input){
    let a = [...input];
    let profit = 0;
    let prices = {
        'sea': {
            'price': 680,
            'counter': Number(a[0])},
        'mountain': {
            'price': 499,
            'counter': Number(a[1])}
    }
    
    for(let i = 2; i <= a.length - 1; i++){
        if(a[i] === "sea" && prices["sea"]["counter"] != 0){profit += prices[a[i]]["price"];; prices[a[i]]["counter"]--;}
        if(a[i] === "mountain" && prices["mountain"]["counter"] != 0){profit += prices[a[i]]["price"]; prices[a[i]]["counter"]--;}
        if(a[i] === "Stop"){console.log(`Profit: ${profit} leva.`);return;}
    }
    console.log(`Good job! Everything is sold.
Profit: ${profit} leva.`)
}

function trener(input){
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let min1 = k * 10 + l;
    let min2 = m * 10 + n;
    let swap = 0;
    let swap2 = 89;
    while(swap2 >= min1){
        swap = 89;
        while(swap >= min2){
            let k1 = Math.trunc(swap2 / 10);
            let l1 = swap2 % 10;
            let m2 = Math.trunc(swap / 10);
            let n2 = swap % 10;
            if (k1 % 2 == 0 && m2 % 2 == 0 && l1 %2 != 0 && n2 %2 != 0){
                if(l1>= l && n2 >= n && swap2 != swap){console.log(`${swap2} - ${swap}`)};
                if(l1>= l && n2 >= n && swap2 == swap){console.log("Cannot change the same player.")}
            }
            swap --
        }
        swap2 --
    }
}

trener(["7",
"6",
"8",
"5"])