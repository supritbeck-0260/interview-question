//find main and cross digonal sum of square matrices
const input = [
    [1 , 2 , 1],
    [4 , 5 , 6],
    [7 , 8 , 9],
]

function findDigonalSum(arr){
    const lengthIndex = arr.length - 1;
    let mainDigonalSum = 0;
    let crossDigonalSum = 0;
    for(let i=0;i<=lengthIndex;i++){
        mainDigonalSum+= arr[i][i];
        crossDigonalSum += arr[i][lengthIndex-i]
    }

    return {mainDigonalSum,crossDigonalSum}
}
console.log(findDigonalSum(input))

// convert a numer to string with out using built in method
const input2 = 12345;
let output = '';
const hashMap = {
    0:'0',
    1:'1',
    2:'2',
    3:'3',
    4:'4',
    5:'5',
    6:'6',
    7:'7',
    8:'8',
    9:'9'
}
function numberToString(number){

    const lastNumber = number%10;
    const remainingNumber = Math.floor(number/10);
    output= hashMap[lastNumber] + output;

    if(remainingNumber>=1) numberToString(remainingNumber)

    return output
}
const result = numberToString(input2)
console.log(result,typeof result)
