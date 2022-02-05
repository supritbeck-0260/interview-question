// Input:
const obj = {
 user: {
   name: "Vaibhav",
   adrress: {
     state: "Delhi",
     zone: "South West"
   },
 }
};

const pathFinder = {};
const path={}
console.log(findPath(obj))
function findPath(object){
    
  for(let key in object){
    pathFinder[key]=true;
    if(typeof object[key] == 'object') findPath(object[key])
    else {
      const objectPath = Object.keys(pathFinder).join('.')
      path[objectPath]=object[key]
    }
  }
  return path;
}

//Output
/*
 {
   user.name:"Vaibhav",
   user.adrress.state:"Delhi",
   user.adrress.zone:"South West"
 }
*/
