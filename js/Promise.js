//Normal Promise 
const product="https://mostafakamalasif.github.io/UOMO-API/index.json"
const user=fetch(product)
console.log(user);
user.then(function(data){
    console.log(data);
    
})

//promise chine
import { cart } from "./Callback_Hell";

// createOrder returns a promise
createOrder(cart)
  .then(function (orderId) {
    // pass the orderId to paymentProcess
    return paymentProcess(orderId);
  })
  .then(function (paymentInfo) {
    // pass the paymentInfo to ordersummery
    return ordersummery(paymentInfo);
  })
  .then(function (walletInfo) {
    // call updateWallet with walletInfo
    return updateWallet(walletInfo);
  })
  .then(function (finalResult) {
    console.log("All done ✅", finalResult);
  })
  .catch(function (err) {         //catch error handling
    console.error("Something went wrong ❌", err);
  });

  //promise using => function
createOrder(cart)
  .then( (orderId)=> {

    return paymentProcess(orderId);
  })
  .then( (paymentInfo) => {

    return ordersummery(paymentInfo);
  })
  .then( (walletInfo)=> {

    return updateWallet(walletInfo);
  })
  .then( (finalResult) =>{
    console.log("All done ✅", finalResult);
  })
  .catch( (err)=> {         
    console.error("Something went wrong ❌", err);
  });