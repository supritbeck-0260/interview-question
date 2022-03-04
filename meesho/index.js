const button = document.getElementById('button');

function clickHander(){
 let count = 0;
 return function(){
 console.log(count++)
 }
}
function debounce(func,delay=300){
let timeout;
return function(...args){
	if(timeout) clearTimeout(timeout);
  timeout = setTimeout(()=>{
  	func(...args)
  },delay)
}
}

function throttling(func,delay=300){
 let timeout;
 return function(...args){
  if(timeout) return;
  
  timeout = setTimeout(()=>{
  			func(...args);
        timeout=null;
  },delay)
 }
}
/* button.addEventListener('click',throttling(clickHander(),1000)); */


const promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
  resolve('promise1')
  },2000)
})
const promise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
  resolve('promise2')
  },1500)
})

/* const allPromise = Promise.all([promise1,promise2]);
allPromise.then(console.log) */

 function promiseAll(arr){
	return new Promise((resolve,reject)=>{
  const result=[];
  let promiseCount=0;
  for(let i=0;i<arr.length;i++){
   arr[i].then(response=>{
   result[i]= response;
   promiseCount++;
   if(arr.length ==promiseCount) resolve(result)
   })
   .catch(err=>reject(err))
  }
  })
}
promiseAll([promise1,promise2]).then(console.log).catch(err=>console.log(err.message))


