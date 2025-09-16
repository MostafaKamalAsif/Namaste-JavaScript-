let arr=[5,8,45,1,4,3]
//finding sum of the array
console.log(arr.reduce(function (sum , index) {
    sum=sum+index
    return sum
},0));

//finding max of the array
console.log(arr.reduce((max,index)=> {
    if (max<index) {
        max=index
    }
    return max
},0));

//finding {26:2 75:1 50:1} 

const user=[
{ firstName: "akshay", lastName: "saini", age: 26 },
{ firstName: "donald", lastName: "trump", age: 75 },
{ firstName: "elon", lastName: "musk", age: 50 },
{ firstName: "deepika", lastName: "padukone", age: 26 }]
console.log(user.reduce((acc, curr)=>{
if (acc[curr.age]) {
  acc[curr.age]+=1
}
else{
    acc[curr.age]=1
}
return acc
},{}));

//finding those user first name which age is gater than 26
console.log(user.reduce((acc,curr)=>{
    if (curr.age>26) {
        acc.push(curr.firstName)
    }
    return acc
},[]));
