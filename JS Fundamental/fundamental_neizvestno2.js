function tracker(input){
    let words = input.shift().split(' ');
    let wordObj = {};
    words.forEach( word => wordObj[word] = 0)
    input.forEach( (word) => 
        {
            if(wordObj.hasOwnProperty(word)){ wordObj[word] ++;}
        }
        )
    let sorted = Object.entries(wordObj).sort(([key1, value1], [key2 , value2]) => value2 - value1)
    for(let word of sorted){
        console.log(word.join(' - '))
    }

    const string = "Albania:Bulgaria:Cyprus:Deuchland";
let strAsArray = string.split(/[\W]+/);
console.log(strAsArray);
}

function company (input){
    let x = [];
    for (let i of input){
        let [company, name] = i.split(" -> ");
        let match = x.find(y => y.company == company)
        if(!match){
            x.push({"company" : company})
            match = x.find(y => y.company == company)
            match["id"] = {}
        }
        if(!match["id"].hasOwnProperty(name)){match["id"][name] = name}
    }
    x.sort((x,y) => x.company.localeCompare(y.company))
    x.forEach((x) => {
        console.log(x["company"])
        for(let i in x["id"]){
            console.log(`-- ${i}`)
        }
    })
}

company2 (
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
        ]
)

function company2 (input){
    let x = {};
    for (let i of input){
    let [company, name] = i.split(" -> ");
    if(!x.hasOwnProperty(company)){
    x[company] = new Set();
    }
    x[company].add(name);
    }
    console.log(x)
    let sortedCompanies = Object.entries(x);
    console.log(sortedCompanies)
    sortedCompanies.sort((a,b) => a[0].localeCompare(b[0]));
    sortedCompanies.forEach(([company, ids]) => {
    console.log(company);
    for(let id of ids){
    console.log(`-- ${id}`);
    }
    });
    }