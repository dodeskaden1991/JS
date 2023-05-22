function math(input){
    let a = [1,2,3,4];
    
    let b = [...input]; // vhod na cql masiv
    let c;
    let ThisIsOnlyHere; //tova ne vliza v Map
    let type;
    let type2;
    let d = 5;
    let e = parseInt("20");
    console.log(`parseInt: "20" vadi: i vid: ${e} / ${typeof(e)}`);
    console.log(`parseInt:
    parseInt(1001,2): , ${parseInt(1001,2)},
    parseInt(1009,2): , ${parseInt(1009,2)}, konvertira 100 v 4,
    parseInt(9009,2): , ${parseInt(9009,2)}, ne konvertira
    parseInt(1001,16): , ${parseInt(1001,16)}`);
    ThisIsOnlyHere = b.map( (x, y) => 
                                    {
                                        if (y < 2)
                                        {
                                            return x;
                                        }
                                        else
                                        {
                                            return a[y];
                                        }
                                    })

    type = b.map( (x,y) =>
                        {
                            if (typeof(x) === "number")
                            {
                                return x;
                            }
                            else
                            {
                                return typeof(x);
                            }
                        })
    type2 = b.map( (x,y) =>
                        {
                            if (isNaN(x))
                            {
                                return typeof(x); //ako stringa moje da stane chislo isNan go priema za chislo
                            }
                            else
                            {
                                return x;
                            }
                        })
    b = b.map(Number); // konvertirane v Number
    c = b.map(ThisIsOnlyHere => ThisIsOnlyHere * d);
    
    console.log("ceil ", Math.ceil(23.45)); // chislo nagore
    console.log("floor ", Math.floor(23.45)); // chislo nadolu
    console.log("pow ", Math.pow(2,8)); // chislo na stepen
    console.log("min ", Math.min(3,4,5)); // minimum
    console.log("min ", Math.min(...a)); // minimum
    console.log("Max ", Math.max(3,4,5)); // maximum
    console.log("max ", Math.max(...a)); // maximum
    console.log("trunc ", Math.trunc(2.17)); //izrqzva desetichnoto
    console.log(`razlikata m/u floor i trunk izpolzvam 5.5 i -5.5, 
    ${Math.floor(5.5)}/${Math.trunc(5.5)};
    ${Math.floor(-5.5)}/${Math.trunc(-5.5)}`);
    console.log(1.1234567.toFixed(3)); //do koj znak no stava tekst
    console.log(1.1.toFixed(3)); //dopulva nuli no vse oshte e tekst
    console.log(`tofixed zakruglq chislata nagore 1.55555: ${1.55555.toFixed(2)}`);
    console.log(`izpolzvajki promenliva mojem i bez to4ka ${a[0].toFixed(3)}`);
    console.log(`AbCdFg
    toLowerCase = ${"AbCdFg".toLowerCase()}
    toUpperCase = ${"AbCdFg".toUpperCase()}
    mojem da izpolzvame za sravnqvane na 2 teksta ako ne znaem dali sa pisani s malki i golmi bukvi`);
    console.log(...b);
    console.log(c);
    console.log(...ThisIsOnlyHere);
    console.log(...type);
    console.log(...type2);
    console.log(parseInt(0.0000001, 10));
    console.log(BigInt("0b11111111111111111111111111111111111111111111111111111"));
    console.log(["1", "2", "3"].map(parseInt));
    const returnInt = (indicator) => parseInt(indicator,10);
    console.log(["1", "2", "3"].map(returnInt));
    const tip = (tip2) => typeof(tip2);
    console.log([1,"2",3,"4"].map(tip));

    let rdCh = 5
    
    ;
    let check = (rdCh > 10) && (rdCh % 2 == 0);
    if (!check){
        console.log("ne izpulneno");
    } else{
        console.log("izpulneno");
    }
}

math(["sedem",8,9,"10"]);