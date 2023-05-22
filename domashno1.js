//01. Hello SoftUni

function one() {
    console.log("Hello SoftUni");
}

//02. Nums 1...10 

function two() {
        for(let i = 1; i <= 10; i ++) {
        console.log(i);
    }
}

//Да се напише функция, която получава цяло число и пресмята лицето на квадрат дадената страна. 

function three(input){
    let a = Number(input[0]);
    a = a * a;
    console.log(a);
}

//inch kum cm

function four(input){
    let a = Number(input[0]);
    a = a * 2.54;
    console.log(a);
}

//Напишете функция, която получава име на човек и отпечатва "Hello, <name>!", където <name> е въведеното име от конзолата.

function five(input){
    let Name = input[0];
    console.log(`Hello, ${Name}!`)
}

//Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: 

function six(input){
    let FirstName = (input[0]);
    let LastName = (input[1]);
    let Age = Number(input[2]);
    let Town = input[3];
    console.log(`You are ${FirstName} ${LastName}, a ${Age}-years old person from ${Town}.`);
}

//Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. 
//Изготвянето на един проект отнема три часа.

function seven(input){
    let Arch = (input[0]);
    let Works = Number(input[1]);
    console.log(`The architect ${Arch} will need ${Works*3} hours to complete ${Works} project/s.`)
}

//Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки.  Храната се пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв.

function eight(input){
    let dog = Number(input[0]);
    let cat = Number(input[1]);
    let cash = Number;
    cash = dog * 2.5 + cat * 4;
    console.log(`${cash} lv.`);
}

//nqkakvi tupi kv.m. na cena 7.61 i 18% otstupka

function nine(input){
    let a = Number(input[0]);
    let price = Number;
    let free = Number;
    price = a * 7.61;
    free = price * 0.18;
    console.log(`The final price is: ${price - free} lv.`);
    console.log(`The discount is: ${free} lv.`);
}

eight(["5","4"]);