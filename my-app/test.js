// implement a delayedReturn function which takes a value and resolves it after a random delay
const delayedReturn = (value)=>{
    const promise = new Promise((resolve,reject) =>{
        const randomDelay = Math.round(Math.random()*10000);
        setTimeout(()=>{
            resolve(value);
        },[randomDelay])
       
    })
    return promise
}


// for(let i=1; i<=10;i++){
//     delayedReturn(i).then(console.log);
// }
const printInSequence = async ()=>{
    let allPromise = []
    for(let i=1; i<=10;i++){
       allPromise.push(delayedReturn(i));
    }
    for(let i=0; i<10;i++){
        const values = await allPromise[i];
        console.log(values)
     }

}
printInSequence()