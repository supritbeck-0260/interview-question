const array = [2,4,1,6,7,8,9];
const target = 7;

console.log(findSumPairs(array,target))
function findSumPairs(arr,target){
    const pairs=[];
    const obj={};
        for(let i in arr){
            const nextValue = target - arr[i];
            if(nextValue in obj){
                pairs.push([arr[i],nextValue])
            }else{
                obj[arr[i]]=i
            }
        }
        return pairs;
    }
