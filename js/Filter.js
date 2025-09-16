let arr=[5,8,45,1,,4,3]
console.log(arr.filter((x)=>x%2));//finding odd number
console.log(arr.filter((x)=>x%2==0));//finding even number
console.log(arr.filter((x)=>x>3));//finding gater than 3

const user=[
{ firstName: "akshay", lastName: "saini", age: 26 },
{ firstName: "donald", lastName: "trump", age: 75 },
{ firstName: "elon", lastName: "musk", age: 50 },
{ firstName: "deepika", lastName: "padukone", age: 26 }]
//finding those user first name which age is gater than 26
console.log(user.filter((x)=>x.age>26).map((y)=>y.firstName));


