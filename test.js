function test(){
    console.log("test");
    console.log("test2");
    console.table(["asd",3,`a`])
    process.stdout.write(`console.log e process.std.out но слага автоматично /n\n`)
    process.stdout.write(`process.std.out дава грешки при повече от един низ или число\n`)
    console.log(`ParseFloat изрязва излишния текст от стринг и прави число или изрязва 0000 от .tofixed
parsefloat 4.5000 = ${parseFloat(4.5000)}
parsefloat 4576asd = ${parseFloat("4576asd")}`)
}

function site(){
    for(let i=1; i<=71; i++){
        console.log(`<p>Въпрос ${i}: Работя с цената на много напрежение.</p>
<input type="radio" id="q${i}yes" name="q${i}" value="yes">
<label for="q${i}yes">Да</label>
<input type="radio" id="q${i}no" name="q${i}" value="no">
<label for="q${i}no">Не</label>
`)
    }
}

test();

// Според резултатите от търсенето(stackoverflow.com)(stackoverflow.com), за да пренасочите изхода на process.stdout към файл, имате няколко възможности:

// •  Можете да използвате командния ред на операционната система, за да направите това. Например:

// node myfile.js > output.txt

// Това ще пренасочи изхода на myfile.js към файла output.txt.

// •  Можете да използвате модула fs на Node.js, за да създадете поток за писане към файл и да го свържете с process.stdout. Например:

// var fs = require("fs");
// // Създаваме поток за писане към файл
// var file = fs.createWriteStream("output.txt");
// // Свързваме потока с process.stdout
// process.stdout.pipe(file);
// // Пишем нещо на конзолата
// console.log("Hello, world!");

// Това ще запише "Hello, world!" във файла output.txt.

// •  Можете да използвате метода write на process.stdout, за да пишете директно в потока. Например:

// var fs = require("fs");
// // Отваряме файла за писане
// var fd = fs.openSync("output.txt", "w");
// // Пишем нещо в потока
// process.stdout.write("Hello, world!\n", null, null, fd);
// // Затваряме файла
// fs.closeSync(fd);

// Това ще запише "Hello, world!" във файла output.txt.
// -------------------
// Ето един пример с .aply където стойността на this е важна:

// Дефинираме обект person с име и метод за поздрав
// let person = {
// name: "Иван",
// greet: function() {
// return "Здравейте, аз съм " + this.name + "!";
// }
// };

// Извикваме метода greet с this равно на person
// console.log(person.greet()); // Здравейте, аз съм Иван!

// Дефинираме друг обект animal с име и метод за звук
// let animal = {
// name: "Боби",
// sound: function() {
// return "Аз съм " + this.name + " и правя " + this.noise + "!";
// }
// };

// Добавяме свойство noise към animal
// animal.noise = "гав-гав";

// Извикваме метода sound с this равно на animal
// console.log(animal.sound()); // Аз съм Боби и правя гав-гав!

// Използваме .aply за да извикаме метода sound с this равно на person
// console.log(animal.sound.apply(person)); // Аз съм Иван и правя undefined!

// Използваме .aply за да извикаме метода sound с this равно на person и аргумент noise равен на "ха-ха"
// console.log(animal.sound.apply(person, ["ха-ха"])); // Аз съм Иван и правя ха-ха!

// В този пример можем да видим, че когато използваме .aply за да променим стойността на this в дадена функция, 
// това влияе на резултата от функцията. Ако подадем неподходяща стойност на this, можем да получим нежелан или 
// грешен резултат. Затова трябва да бъдем внимателни когато използваме .aply и да знаем каква стойност очаква функцията за this.
// Обръщаме ASCII код 65 в символ "A"
// console.log(String.fromCharCode(65)); // A
// Обръщаме първия символ "H" в ASCII код - където стр е променлива
// console.log(str.charCodeAt(0)); // 72

function archer(input){
    let point = 0;
    let targetsArr = input.shift()
        .split("|")
        .map(Number);
        for(text of input){
            if(text === "Game over"){break;}
            if(text === "Reverse"){targetsArr.reverse(); continue;}
            text = text.split("Shoot ").join("");
            let [position,first,second] = text.split("@")
            switch(position){
                case "Left":
                    if(first < targetsArr.length - 1){
                        x = Number(first) - Number(second);
                        while(x < 0){x = targetsArr.length + x}
                        targetsArr[x] -= 5
                        point += 5;
                    }
                    break;
                case "Right":
                    if(first < targetsArr.length){
                        x = Number(first) + Number(second);
                        while(x > targetsArr.length - 1){x -= targetsArr.length}
                        targetsArr[x] -= 5
                        point += 5;
                    }
                    break;
            }            
        }
        console.log(targetsArr.join(" - "));
        console.log(`John finished the archery tournament with ${point} points!`) 
}

function asd(){
    for(let i=1; i<=20; i++){
        console.log(`
        <div id="${i}-1" class="snake"></div>
        <div id="${i}-2" class="snake"></div>
        <div id="${i}-3" class="snake"></div>
        <div id="${i}-4" class="snake"></div>
        <div id="${i}-5" class="snake"></div>
        <div id="${i}-6" class="snake"></div>
        <div id="${i}-7" class="snake"></div>
        <div id="${i}-8" class="snake"></div>
        <div id="${i}-9" class="snake"></div>
        <div id="${i}-10" class="snake"></div>
        <div id="${i}-11" class="snake"></div>
        <div id="${i}-12" class="snake"></div>
        <div id="${i}-13" class="snake"></div>
        <div id="${i}-14" class="snake"></div>
        <div id="${i}-15" class="snake"></div>

`)
    }
}

// asd()

archer([
    "10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Reverse"
])
