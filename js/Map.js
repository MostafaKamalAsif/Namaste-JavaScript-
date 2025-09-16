let arr=[5,8,45,1,3]
function double(x) {
    return x*2
}
function triple(y) {
    return y*3
}
function binary(y) {
    return y.toString(2) //toString is use for convert number into decimal, octal , binary, hexdecimal
}
let output=arr.map(double)
let outputTriple=arr.map(triple)
let outputBinary=arr.map(binary)

console.log(output);
console.log(outputTriple);
console.log(outputBinary);

//We can also write it like this . It give us hexadecimal number
console.log(arr.map((x)=>
    x.toString(16)
));
