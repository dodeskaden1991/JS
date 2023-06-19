//Arrays Advanced - Exercise

function train(input){
    vagons = input.shift().split(' ').map(Number);
    max = Number(input.shift());
    for(type of input){
        let doing = type.split(' ');
        if(doing.length > 1){
            vagons.push(doing[1])
        }else{
            for(now of vagons){
                if(now + Number(doing[0]) > max){
                    continue;
                }else{
                    element = vagons.indexOf(now)
                    vagons[element] += Number(doing[0]);                    
                    break;
                }
            }
        }
    }    
    console.log(...vagons)
} 

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])