Array.prototype.myMap=function(func){
    const length = this.length;
    const output = []
    console.log(Object.entries(this))
    for(let i=0;i<length;i++){
          output.push(func(this[i],i))
    }
    return output;
  }
  
  console.log([1,2,3,4,5,6].myMap((elem,index)=>elem*1));
  const arr = [null,undefined,false,,{name:'suprit'}]
  
  console.log(arr.map((elem)=>elem + '1')); /// .map function works better with void items.
  console.log(arr.myMap((elem)=>elem + '1'));
  const newOutput = [];
  arr.forEach((elem)=>{
      newOutput.push(elem)
  })
  console.log(newOutput)