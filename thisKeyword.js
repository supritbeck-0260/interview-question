const obj={
    name:'suprit',
    display1:function(){
        console.log(this.name)
    },
    display2:()=>{
        console.log(this.name)
    }
}

let name='suprit';
debugger
obj.display1();
obj.display2();