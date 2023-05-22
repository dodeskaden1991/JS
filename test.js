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