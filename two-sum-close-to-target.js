const input = [1,3,7,-3,8,7]
const target = 33;
function twoClosestValues(arr,target){
    const sorted = arr.sort((a,b)=>a-b);
    console.log(sorted)
    let start=0 ;
    let last = sorted.length - 1;
    while(start+1<last){
        const sum = sorted[start] + sorted[last];
        if(sum == target) break;
        else if(sum < target) start++;
        else last--
    }
    return [sorted[start],sorted[last]]

}
const start=Date.now()
console.log(twoClosestValues(input,target))
const end=Date.now();
console.log('excusition time:',end-start,'ms')