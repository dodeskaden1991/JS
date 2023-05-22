function seconds(input){
    a = [...input];
    a = a.map(Number);
    sum = 0;
    for (let i = 0; i < a.length; i++){
        sum += a[i];
    }
    if (sum % 60 < 10){
        console.log(Math.trunc(sum/60) + ":0" + sum%60);
    }else{
        console.log(Math.trunc(sum/60) + ":" + sum%60);
    }
}

function bonus(input){
    a = Number(input);
    b = 0;
    if(a<=100){
        b = 5;
    }else if(a<=1000){
        b = 0.2 * a;
    }else{
        b = 0.1 *a;
    }
    if(a%2 == 0){
        b += 1;
    }
    else if(a%10 == 5){
        b += 2;
    }
    console.log(b + "\n" + (a+b));
}

function fiftheen(input){
    a = [...input];
    a = a.map(Number);
    a[1] += 15;
    if(a[1] >= 60){
        a[0]++;
        a[1] -= 60;
        if(a[0] == 24){a[0] = 0};
    }
    if (a[1] < 10){
        console.log(a[0] + ":0" + a[1]);
    }else{
        console.log(a[0] + ":" + a[1]);
    }
}

function vacantion(input){
    a = [...input];
    a = a.map(Number);
    b = 0;
    c = 0;
    for (let i = 1; i< a.length; i++){
        switch(i){
            case 1: {b = b + a[i]*2.6; c += a[i]} break;
            case 2: {b = b + a[i]*3; c += a[i]} break;
            case 3: {b = b + a[i]*4.1; c += a[i]} break;
            case 4: {b = b + a[i]*8.2; c += a[i]} break;
            case 5: {b = b + a[i]*2; c += a[i]} break;
        }
    }
    if(c>=50){
        b = (0.75 * b)*0.9;
    }else{
        b = 0.9 * b;
    }
    if(b >= a[0]){
        console.log(`Yes! ${(b-a[0]).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(a[0]-b).toFixed(2)} lv needed.`);
    }
}

function film(input){
    a = [...input];
    a = a.map(Number);
    sum = 0.1 * a[0];
    if(a[1]>150){
        sum += 0.9*a[2]*a[1];
    }else{
        sum += a[2]*a[1];
    }
    if(sum > a[0]){
        console.log(`Not enough money!
Wingard needs ${(sum - a[0]).toFixed(2)} leva more.`);
    }else{
        console.log(`Action!
Wingard starts filming with ${(a[0]-sum).toFixed(2)} leva left.`)
    }
}

function swim(input){
    a = [...input];
    a = a.map(Number);
    b = a[1] * a[2] + (Math.trunc(a[1]/15)*12.5);
    if (b < a[0]){
        console.log(`Yes, he succeeded! The new world record is ${b.toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(b-a[0]).toFixed(2)} seconds slower.`);
    }
}

function computer(input){
    a = [...input];
    a = a.map(Number);
    sum = 0;
    price = 250*a[1];
    for (let i = 1; i < a.length; i++){
        switch (i){
            case 1: {sum += price;break;}
            case 2: {sum += a[i]*0.35*price;break;}
            default: {sum += a[i]*0.1*price;break;}
        }
    }
    if(a[0]>= sum && a[0] >= (0.85 * sum)){
        if(a[1] > a[2]){
            console.log(`You have ${(a[0]-0.85*sum).toFixed(2)} leva left!`)
        }else{
            console.log(`You have ${(a[0]-sum).toFixed(2)} leva left!`)
        }
    }else{
        if(a[1]>a[2]){
            console.log(`Not enough money! You need ${(sum*0.85-a[0]).toFixed(2)} leva more!`)
        }else{
            console.log(`Not enough money! You need ${(sum-a[0]).toFixed(2)} leva more!`)
        }
    }
}

function serial(input){
    let a = [...input];
    if(a[1] <= a[2]-a[2]/8-a[2]/4){
        console.log(`You have enough time to watch ${a[0]} and left with ${Math.ceil((a[2]-a[2]/8-a[2]/4) - a[1])} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${a[0]}, you need ${Math.ceil(a[1] - (a[2]-a[2]/8-a[2]/4))} more minutes.`);
    }
}

serial(["Game of Thrones",

"60",

"96"])