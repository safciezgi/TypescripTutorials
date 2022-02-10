function sum(x, y){
    return x+y;
}

function sum2(x:number, y:number):number{
    return x+y;
}

let sum3 = function(x:number, y:number):number{
    return x+y;
}

console.log(sum(2,3));
console.log(sum("Ankara",3));
console.log(sum2(2,4));
//console.log(sum2("Ankara",3));  // can not be declared
console.log(sum3(5,8));

let sum4 = function(x:number, y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}
console.log(sum4(3));       //if y undefined
//console.log(sum4(3,40))  //if y defined

//rest function: used if we dont know the number of parameter 
function Invite(firstInvited:string, ...others:string[]):string{
    return firstInvited + " " + others.join(" ")
}

console.log(Invite("Ezgi", "Ayse", "Elif"))