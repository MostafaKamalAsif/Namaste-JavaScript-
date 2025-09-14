function x() {
    let a=50
    function y() {               // it can remember is prents so we can access a  in the function
        console.log(a);
        
    }
    return y
}
x()() //x()(); and let z=x();  z() is same thing it print 50

//if we return y not in his preants scope but in global scop or other sccop it can access it prancts varibles

// A function along with is referance of it outer eviorment together forms a clouser. 