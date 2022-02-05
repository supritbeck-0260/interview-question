// const list = [12, 45, 48, 5, 451, 2,34 ,43,54,66 ]
// //linear search - unsorted array - complexity - O(n)

// function linearSearch(arr,value){
//     for( let i in arr){
//         if(arr[i] == value) return i;
//     }
//     return -1;
// }

// console.log(linearSearch(list,48));


//binery search -  sorted array - O(log n)

const input = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const target = 2
console.log(BinarySearch(input,target))
function BinarySearch(array,value){
    let left = 0;
    let right = array.length -1;
    let mid = findMidIndex(right,left);
    while(array[mid] !=value && left<= right){
        if(value < array[mid]){
            right = mid - 1;
        }else{
            left = mid+1;
        }
        mid=findMidIndex(right,left)
    }

    if(array[mid] == value) return mid;

    return -1;

    function findMidIndex(firstIndex,secondIndex){
        return ~~((firstIndex+secondIndex)/2);
    }

}
console.log(input.findIndex(elem=>elem==target))


