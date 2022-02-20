

// const fn = data=> arg=> data=arg ?? data;

function fn (data){
 return function (arg){
     data = arg??data
     return data
 }
}
const x = fn(10);
console.log(x()); // 10
console.log(x(440)); // 440
console.log(x()); // 440
console.log(x(30)); // 30
console.log(x()); // 30
console.log(x()); // 30
console.log(x(0)); // 0
console.log(x()); // 0
console.log(x()); // 0


