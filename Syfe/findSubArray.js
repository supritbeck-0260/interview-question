/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
**/



const chunk = (arr, size) => {
    const length = arr.length;
    const output = [];
    let chunk = [];
    for(let i=0;i<length;i++){
       chunk.push(arr[i]);
        if(chunk.length ==size){
            output.push([...chunk]);
            chunk.length=0;
        }
        
    }
    if(chunk.length)output.push(chunk)
    return output;
};



console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
console.log(chunk([2, 2], 3)); // [[2, 2]]
