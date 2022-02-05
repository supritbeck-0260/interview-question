const input = '({[]}[](hello))';

const start=Date.now()
console.log(isBalancedBracket(input));
const end=Date.now();
console.log('excusition time:',end-start,'ms')

function isBalancedBracket (str){
    const stack = [];
    const allBrackets = {
        '{':'}',
        '(':')',
        '[':']',
        '}':'{',
        ')':'(',
        ']':'['
    }
    const closingBracket = {
        '}':'{',
        ')':'(',
        ']':'['
    }
    for(let i in str){
        const bracket = str[i];
        debugger
        if(closingBracket[bracket] && stack[stack.length-1] &&  closingBracket[bracket] == stack[stack.length-1]) stack.pop();
        else if(bracket in allBrackets) stack.push(bracket);
    }
    return  stack.length == 0;
}

//pseudo code
//let string = ({[]}[](hello))
//function isBalancedBracket
// let stack =[]
// for bracket in string
//  if opening bracket stack.push
// if closing bracket stack.pop
//end of loop
//if stack length ==0
// return balanced bracket
//else unbalanced bracket
//end of function