const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject('hello world'),1000);
})
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject('I am recected'),2000);
})
const promise = Promise.all([promise1,promise2,promise3]);

promise.then(console.log)
.catch(console.log);