function caseNumber() {
    let day = 3;
    console.log("izpulnenie s break");
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Thusday");
            break;
        case 3:
            console.log("Srqda");
            break;
        case 4:
            console.log("Chetvurtuk");
            break;
        case 5:
            console.log("Petuk");
            break;
        case 6:
            console.log("Subota");
            break;
        case 7:
            console.log("Nedelq");
            break;
        default:
            console.log("Chushki");
            break;
    }
    console.log("izpulnenie bez break. Pri suvpadenie izpulnqva vsi4ko nadolu do break ili do kraq na kase");
    switch(day){
        case 1:
            console.log("Monday");
        case 2:
            console.log("Thusday");
        case 3:
            console.log("Srqda");
        case 4:
            console.log("Chetvurtuk");
        case 5:
            console.log("Petuk");
        case 6:
            console.log("Subota");
        case 7:
            console.log("Nedelq");
        default:
            console.log("Chushki");
        break;
    }
    console.log("pri mnojestvo mojem da slojim samo edin consol log deto ni trqbva");
    switch(day){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("delnik");
            break;
        case 6:
        case 7:
            console.log("pochiven");
            break;
        default:
            console.log("Chushki");
        break;
    }
}

caseNumber()