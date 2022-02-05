
    
const calculate =()=>{
    let total=0;
 return ( function chain(){
       return{ 
           add:(value)=>{
            total += value;
            return chain()
        },
        subs:(value)=>{
            total-=value;
            return chain()
        },
        disp:()=>total,
    }
    })()
}

const cal = calculate();

console.log(calculate().add(6).add(3).add(5).subs(1).disp())