const a1 = [-2, 0, 3, 5]
const a2 = [3, 6, 6]
const a3 = [-20, 0, 0]
console.log(optimized(a1,a2,a3))
function optimized(arr1,arr2,arr3){
    const length1 = arr1.length;
    const length2 = arr2.length;
    const length3 = arr3.length;
    let i=0;
    let j=0;
    let k=0;
    const output=[];
    while(i<length1 || j<length2 || k<length3){
        const toBePushed = Math.min(arr1[i]?? Infinity,arr2[j]??Infinity,arr3[k]??Infinity);
        if(toBePushed == arr1[i]) i++;
        else if(toBePushed == arr2[j]) j++;
        else if(toBePushed == arr3[k]) k++;
        output.push(toBePushed);
    }

    return output
}