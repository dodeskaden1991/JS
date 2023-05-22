function Valute(input){
    let USD = Number(input[0]);
    let valu = 1.79549;
    console.log(USD * valu);
}

function Gr(input){
    let Rad = Number(input[0]);
    console.log(Rad * 180 / Math.PI);
}

function lihva(input){
    let sum = Number(input[0]);
    let srok = Number(input[1]);
    let lihva = Number(input[2]);
    console.log(sum + srok*((sum*lihva/100)/12));
}

function study(input){
    let str = Number(input[0]);
    let speed = Number(input[1]);
    let days = Number(input[2]);
    console.log(str / speed / days);
}

function school(input){
    let penPrice = 5.8;
    let boardPrice = 7.2;
    let inkPrice = 1.2;
    let pen = Number(input[0]);
    let board = Number(input[1]);
    let ink = Number(input[2]);
    let percent = Number(input[3]);
    let sum = pen * penPrice + board * boardPrice + ink * inkPrice;
    console.log(sum - (sum * percent / 100));
}

function paint(input){
    let propylen = Number(input[0]);
    let ink = Number(input[1]);
    let litres = Number(input[2]);
    let hours = Number(input[3]);
    let workersGild = Number;
    let torbi = 0.4;
    let totalPrice = Number;
    totalPrice = (
        (propylen + 2) * 1.5 + 
        (ink + 0.1 * ink) * 14.5 +
        litres * 5 +
        torbi
    )
    workersGild = 0.3 * totalPrice * hours;
    console.log(totalPrice + workersGild);
}

function delivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let VG = Number(input[2]);
    let shugar = Number;
    let totalPrice = Number;
    totalPrice = 10.35 * chicken + 12.4 * fish + 8.15 * VG;
    shugar = 0.2 * totalPrice;
    console.log(totalPrice + shugar + 2.5);
}

function basketball(input){
    let price = Number(input[0]);
    let kecove = price - 0.4 * price;
    let ekip = kecove - 0.2 * kecove;
    let topka = 0.25 * ekip;
    let aksesoari = 0.2 * topka;
    console.log(price + kecove + ekip + topka + aksesoari);
}

function fish(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let percent = Number(input[3]);
    let plosht = Number;
    plosht = (a/10) * (b/10) * (c/10);
    console.log(plosht - (percent * plosht) / 100);
}

paint(["10","11","4","8"]);