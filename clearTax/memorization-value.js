//reduce heave function call by memorizing the value

const sum = (...args)=> args.reduce((total,current)=>total+=current,0);

function Memo (fun){

    const obj= {}

    return (...arg)=>{    
        const valueString = arg.join('+')
        const memorizedValue = obj[valueString]
        if(memorizedValue) return obj[valueString]

        obj[valueString] = fun(...arg);
        return obj[valueString]
    }

}
const menorized = Memo(sum)
console.log(menorized(2,4))
console.log(menorized(2,4))
console.log(menorized(3,4))
console.log(menorized(2,4,2))
console.log(menorized(3,4))