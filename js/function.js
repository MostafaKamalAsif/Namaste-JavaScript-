//First class function
function xyz(parms1) {
    
    console.log(parms1);
    
//    return function (parms1) {
//     console.log("b is here");
    
// } 
}
var b=function (a,b) {
   return a+b
}

xyz(b(5,10))



function xyz(parms1) {
    
    console.log(parms1);
    

}


xyz(function (a=5,b=50) {
   return a-b
})


