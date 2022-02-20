// find duplicate number in the array and find missing number without using extra space
const input2 = [4,3,5,1,4]
console.log(findMissingNduplicateNumber(input2))
function findMissingNduplicateNumber(arr){
  const length = arr.length;
  let duplicateNumber;
  let actualSum=0;
   for(let i=0;i<length;i++ ){
       
     const index = Math.abs(arr[i])
     actualSum +=index;
     arr[index] = -arr[index]
     if(arr[index]>=0) {
      duplicateNumber = arr[i];
     }
   }

   const expectedSum = length*(length+1)/2;
   const missingNumber = expectedSum - (actualSum - duplicateNumber)
   return {duplicateNumber,missingNumber}

}
