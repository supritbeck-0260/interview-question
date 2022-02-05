//bubble sort - complexity - O(n^2)
const input = [5,3,8,4,6];

console.log(bubbleSort(input))
// function bubbleSort(array){
//     const lenght = array.length;
//     for(let i in array){
//         debugger
//         for(let j=i; j< lenght;j++ ){
//             if(array[i] < array[j]){
//                 [array[i],array[j]] = [array[j],array[i]]
//             }
//         }

//     }
//     return array
// }

function bubbleSort(array){
    const lenght = array.length;
    for(let i in array){
        debugger
        for(let j=0; j< lenght-1-i;j++ ){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }

    }
    return array
}