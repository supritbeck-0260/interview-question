/*
a1 = [-2, 0, 3, 5]
a2 = [3, 6, 6]
a3 = [-20, 0, 0]

# Output:
o = [-20, -2, 0, 3, 5, 6]
*/
// const a1 = [-2, 0, 3, 5]
// const a2 = [3, 6, 6]
// const a3 = [-20, 0, 0]
// console.log(mergeArrays(a1,a2,a3))
// function mergeArrays(arr1,arr2,arr3){
//     const mergedArray = [...arr1,...arr2,...arr3];
//     const sortedArray =  mergedArray.sort((a,b)=>a-b);
//     return [...new Set(sortedArray)]

// }
// console.log(optimized(a1,a2,a3))
// function optimized(arr1,arr2,arr3){
//     const length1 = arr1.length;
//     const length2 = arr2.length;
//     const length3 = arr3.length;
//     let i=0;
//     let j=0;
//     let k=0;
//     const output=[];
//     while(i<length1 || j<length2 || k<length3){
//         debugger
//         if(i<length1 && (arr2[j] == undefined || arr1[i] <= arr2[j]) && (arr3[k]==undefined || arr1[i]<= arr3[k])){
//             output.push(arr1[i]);
//             i++;
//         }
//        else if(j< length2 && (arr1[i] ==undefined ||arr2[j] <= arr1[i]) && (arr3[k]==undefined || arr2[j]<= arr3[k])){
//             output.push(arr2[j]);
//             j++;
//         }
//         else if(k < length3 && (arr1[i] ==undefined || arr3[k] <= arr1[i]) && (arr1[i] ==undefined || arr3[k]<= arr1[i])){
//             output.push(arr3[k]);
//             k++;
//         }
//     }
//     return [...new Set(output)];
// }


// function debounce(callback,delay){
//    let time;
//     return function(...args){
//     if(time)clearTimeout(time);

//      time =  setTimeout(function(){
//                 callback(args)
//         },delay)


//     }
// }

// const test = debounce(()=>console.log('hello'),300)
// test();

// test();

// test();


