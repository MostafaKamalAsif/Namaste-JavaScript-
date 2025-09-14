// Normal timer
let x=1
setTimeout(function(){
console.log(x);
},2000)
 
// wrong timer
for (var i = 0; i < 5; i++) {
   setTimeout(() => {
    console.log(i);
    
   },i*1000);
    
}

// Right timer
for (let i = 1; i <= 5; i++) {
   setTimeout(() => {
    console.log(i);
    
   },i*1000);
    
}

// another right timer using var
function xyz() {
    
for (var i=1; i <= 5; i++) {
    function close(x) {
   setTimeout(() => {
    console.log(x);
    
   },x*1000);   
}
close(i)
}
}
xyz()