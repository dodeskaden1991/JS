function probno() {
    console.log("Hello Deyan");
    console.log("1"); //като текст
    console.log(2); //като чило
    let text = "Създаване на стринг"; //създаваме променлива
    console.log(text);
    let masiv = [1,2,3,4,"5","6"];
    console.log(masiv);
    console.log(masiv[3]);
    console.log(masiv.length); //показва дължина на масив
}

function danni(vhod){
    let vuvedi = vhod[0]; // правим променлива вземаща от функция
    console.log("TUK");
    console.log(vuvedi);
} //при извикване на функцията автоматично пълним масива

function danni2(vhod){
    let vuvedi = vhod[2]; //vkarva 3ta bukva
    console.log(vuvedi);
    console.log(vhod[0]); //vadq purva bukva
}

function math(input){
    let number = input[0];
    console.log(number + 9); // dolepq devet do teksta
    let number2 = Number(input[0]); //pravq chislo

    console.log(number2 + 9); //voalq
    console.log("az sum na " + number + " godini.");
    console.log(`az sum na ${number} godini`); // vkarvane na promenliva vutre
    number = number + " samodobavqne";
    console.log(number);
    console.log("tekst " + 2 + 2 + " bez skobi");
    console.log("tekst "+ (2 + 2) + " sus skobi");
}

probno();
danni(["1,2,3,4,5"]);//пълним функция
danni2("prOben tekst"); //bez skobi samo stava podobno na masiv
math(["9"]);