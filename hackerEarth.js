var y=4;
var obj = {
    y:3,
    foo:function(){
                var y = 2;
                setTimeout(function(){
                    var y=1;
                    console.log(this.y);
                },1000)
    }
   }


   const output = ['1','2','3'].map(parseInt)
//    const result = (function(x){delete x; return x})(0)
   console.log(output)
// console.log(obj.foo())