// function func(){
//     console.log(this)
//         for(var i = 0; i < 5; i++){
//         ((value)=> setTimeout(()=> console.log(value),value*1000))(i);
//     }
//   } 
//   func()
//   functio()
//   const functio = ()=>this;
// var obj1 = {
//     valueOfThis: function(){
//       return this;
//     }
//   }
//   var obj2 = {
//     valueOfThis: ()=>{
//       return this;
//     }
//   }
  
//   console.log(obj1.valueOfThis()); 
//   console.log(obj2.valueOfThis()); 

// function person (text){
//     return this.name + ' '+ text;
// }
// const obj={
//     name:'Suprit'
// }


// Object.prototype.cumtomBind= function(value,...args){
//     const func = this;
//     return ()=> func.apply(value,args)
    

// }
// const newFucntion = person.cumtomBind(obj,' 1 2 3 4');
// console.log(newFucntion())


// const input = [1,2,-7,-5,8];

// function segragate(arr){
//     const output = [];
//         for( let val of arr){
//             if(val < 0) output.push(val)
//             else output.unshift(val);
//         }
//     return output
// }

// console.log(segragate(input))






