function promise(number){
    return new Promise((resolve,rejcet)=>{
        setTimeout(()=>{
            if(number<10) resolve(number);
            else rejcet('Number is greater than 10')

        },2000)
    });
}

promise(3).then(console.log).catch(console.log);


