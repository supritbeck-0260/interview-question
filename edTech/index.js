// const array = [1,2,3,4,5,3,2,3,5];

// function disitinct(arr){
//     const obj={}
//     for(let i in arr){
//         obj[arr[i]]=i
//     }
//     return Object.keys(obj)
// }
// console.log(disitinct(array))
// const input = [ 
//     [ [0,1],  [2] ],
//      3, 
//      [ [4,5], 6 ] 
//     ];

// function flaten(arr){
//     const flatArray=[];
//     (function recur(array){
//             array.forEach((elem)=>{
//                 if(typeof elem == 'object') recur(elem);
//                 else flatArray.push(elem);
//             })
//     })(arr) 
//     return flatArray   
// }
// console.log(flaten(input))

const input = 'quick brown fox,              jumps over';

function addSpaceAfterComma(data){
    return data && data.replace(/,\s+/g,', ')
}
console.log(addSpaceAfterComma(input))