// Longest Common Prefix
// 1 < n < 200
const strs = ["flower","flow","flight"]
// "fl"
const str2 = ["olx", "orange", "pla"];

console.log(findPrefix(strs))
function findPrefix(arr){
    const shortElementIndex = findShortestString(arr)
    let referenceString = arr[shortElementIndex];
    const length = arr.length;

    for(let i=0;i<length;i++){
        if(arr[i].startsWith(referenceString)){

        }
        referenceString = referenceString.slice(0,-1);
        i++;
    }

    return referenceString;
    
}

function findShortestString(arr){
    let shortLength=Infinity;
    let shortlengthIndex=0;
    for(let i in arr){
        const length = arr[i].length;
        if(length < shortLength){
            shortLength = length;
            shortlengthIndex = i;
        }

    }
    return +shortlengthIndex;
}

// const input = [1,2,3,5]
// Array.prototype.customMap = (func)=>{
//     const length= this.length;
//     const output = [];
//     for(let i=0;i<length;i++){
//         output.push(func(this[i]));
//     }
//     return output;
// }

// console.log(input.customMap((curent)=>2*curent))

