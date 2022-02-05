// const curry=(fun)=>{
//          return  function(a){
//               return a? function inner(b){
//                    return  b?function(c){
//                         return c?inner(c):fun(a,b)
//                    }:a
//                }:a
//          }
// }
// function sum (total,current){
//     console.log(total,current)
//    return total+current
// }
// const currySum = curry(sum);
// const result = currySum(1)(2)(3)(4)
// console.log(result())

function sum(a){
    return function curry(b){
        if(b){
            a+=b;
             return curry;
        }
        
        return a;

    }
}
console.log(sum())