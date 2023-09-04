function odd(...a) {
    console.log(a.reduce((x,y) => x ^ y))
}

function bSwitch(n,x){
    y = 7 << x;
    result = n ^ y;
    console.log(result);
}

odd(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,5)