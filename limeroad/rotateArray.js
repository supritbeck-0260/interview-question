const input = [7,2,3,4,5];
const k=3;
console.log(rotate(input,k))
function rotate(arr,num){
  if(!Array.isArray(arr))return null;
  
  for(let i=0;i<num;i++){
    arr.unshift(arr.pop())
  }
  return arr
}