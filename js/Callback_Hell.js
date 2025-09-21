// if we has to write a payment process in js . First we have to write creatorder function  to collect  the product id or name from cart and callback function showordersummery if its found then the process the next level the showordersummery function in that we have to write orderid and another callback function paymentprocess than the payment info and another callback function updatewellat . when in function we have to write another callback function also in that function we have to write another callback function like a nested function known as callback Hell or piramid of doom

export let cart=["shirt" , "pant"]
createOrder(cart, function (orderId){
    paymentInfo(orderId, function(paymentprocess){
        showOrderSummery(paymentprocess, function(){
            updatewallet();
        });
    });
});
