const radius=[14,20,41,20]
const pi=3.1416
let area=function (r) { //area is callback function
    return pi*r*r
}
let calculate=function (radius,logic) {// this is higer order function
    let output=[]
    for (let i = 0; i < radius.length; i++) {
       output.push(logic(radius[i]))
        
    }
    return output
}

console.log(calculate(radius,area));

console.log(radius.map(area)); //This function and calculate function is same 
