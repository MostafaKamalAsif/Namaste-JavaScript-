setTimeout(() => {
    let x=10
    console.log(x);      // setTimeout is a callback function and addEventlistener also a callback function
    
}, 5000);

// If we write a function and push another function on it then it known as callback function. I give us advantage to execute cod as async order.
function b(z) {
    console.log("cllback is here");
    z()
}
b(function y() {
    console.log("This is callback");
    
})