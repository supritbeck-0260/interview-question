const input = [ 16, 17, 4, 3, 5, 2 ];

function findLeaderNumbers(arr){
    const length = arr.length;
    let currentLeader = -Infinity;
    const output = [];
    for(let i=length;i>0;i--){
        const value = arr[i]
        if(currentLeader < value) {
            currentLeader =  value;
            output.unshift(value);
        }
    }
    return output;
}

console.log(findLeaderNumbers(input))