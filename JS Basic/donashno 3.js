function ocenka(input){
    let a = Number(input[0]);
    if (a>=5.5){
        console.log("Excellent!");
    }
}

function more(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    if (a > b){
        console.log(a);
    }
    else{
        console.log(b);
    }
}

function chetno(input){
    let a = Number(input[0]);
    if (a % 2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

function password(input){
    let a = input[0];
    if (a == "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }
    else{
        console.log("Wrong password!");
    }
}

function proverka(andrei){
    let a = Number(andrei[0]);
    if (a < 100){
        console.log("Less than 100");
    }
    else if (a <= 200){
        console.log("Between 100 and 200");
    }
    else{
        console.log("Greater than 200")
    }
}

function skorost(input){
    let a = Number(input[0]);
    if (a <= 10){
        console.log("slow");
    }
    else if (a <= 50){
        console.log("average");
    }
    else if (a <= 150){
        console.log("fast");
    }
    else if (a <= 1000){
        console.log("ultra fast");
    }
    else{
        console.log("extremely fast")
    }
}

function lice(input){
    let figura = String(input[0]);
    let lice = Number;
    if (figura == "square"){
        let a = Number(input[1]);
        lice = a * a;
    }
    else if (figura == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        lice = a * b;
    }
    else if (figura == "circle"){
        let a = Number(input[1]);
        lice = Math.PI * a * a;
    }
    else if (figura == "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        lice = a * b / 2;
    }
    console.log(lice);
}

lice(["triangle", "4.5", "20"]);