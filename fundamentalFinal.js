function hogwarts(spell) {
    word = spell.shift();
    let magic = [
        {
            item : "Abracadabra",
            do : () => {
                return;
            }
        },
        {
            item : "Abjuration",
            do : () => {
                word = word.toUpperCase();
                console.log(word);
            }
        },
        {
            item : "Necromancy",
            do : () => {
                word = word.toLowerCase();
                console.log(word);
            }
        },
        {
            item : "Illusion",
            do : (x) => {
                let [index, symbol] = x
                if(index > word.length - 1 || index < 0 || symbol === undefined){
                    console.log("The spell was too weak.")
                    return;
                }else{
                    let next = index
                    next++
                    let dynamic = word.substring(0, index) + symbol + word.substring(next);
                    word = dynamic;
                    console.log("Done!")
                }
            }
        },
        {
            item : "Divination",
            do : (x) => {
                let [word1, word2] = x
                if(word1.length > 0 && word2 !== undefined){
                
                while(word.includes(word1)){
                    word = word.replace(word1, word2);}

                console.log(word)
                }
            }
        },
        {
            item : "Alteration",
            do : (x) => {
                if(x.length != 0){
                x = x.toString()
                if(word.includes(x)){
                word = word.replace(x,"")
                console.log(word)
                }
            }
            }
        }
    ]

    for(let spells of spell){
        let [magician,...letParty] = spells.split(" ");
        let match = magic.find((x) => x.item == magician)
        if(match){
            match.do(letParty)
        }else{
            console.log("The spell did not work!")
        }
    }
}

function egg(text){
    let pattern = /[@#]+(?<color>[a-z]{3,})[@#]+\W*(?<count>\d+)/gm;
    while(match = pattern.exec(text)){
        console.log(`You found ${match.groups.count} ${match.groups.color} eggs!`);
    }
}

function fb(input){
    let obj = {};
    function add(name){
        
            obj[name] = {};
            obj[name]["Like"] = 0;
            obj[name]["Comment"] = 0;
        
    }
    for(command of input){
        command = command
            .split(":")
            .map(element => element.trim());
        let [commandType,...doing] = command
        switch(commandType){
            case "New follower":
                if(!obj.hasOwnProperty(doing)){
                    add(doing);
                }
                break;
            case "Like":
                let [usernameL, countL] = doing;
                if(!obj.hasOwnProperty(usernameL)){
                    add(usernameL);
                }
                obj[usernameL]['Like'] += Number(countL);
                break;
            case "Comment":
                let [usernameC] = doing;
                if(!obj.hasOwnProperty(usernameC)){
                    add(usernameC);
                }
                obj[usernameC]['Comment']++;
                break;
            case "Blocked":
                if(!obj.hasOwnProperty(doing)){
                    console.log(`${doing} doesn't exist.`)
                }else{
                delete obj[doing];
                }
                break;
        }
    }
    console.log(`${Object.keys(obj).length} followers`);
    for(let i in obj){
        console.log(`${i}: ${Number(obj[i]['Like']) + Number(obj[i]['Comment'])}`);
    }
}



hogwarts(["*Master",
"Illusion 5 asd", 

"Divination * Target",

"Abjuration",

"Necromancy",

"Alteration",

"Abracadabra"])