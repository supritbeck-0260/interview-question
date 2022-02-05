let obj = {
a: {a1: {a2: 1}},
b: 2,
c: {c1: 1},
}

// find largest path 
//a a1 a2 3
  let output=[];
  let path =[];
//   console.log(traverse(obj))
                       
  function traverse(ob) {
    for(let key in ob){
      if(typeof ob[key] == 'object'){
        path.push(key)
        traverse(ob[key])
    }else {
      path.push(key);
      if(path.length > output.length){
           output=[...path];
      }
      
      path=[];
      
      
    }
      
      
  }
    return {output,length:output.length}
    
  }

//   let i;
//   for(i=0;i<3;i++){
//     const log = ()=>{
//         console.log(i)
//     }
//     setTimeout(log,100)
//   }
    