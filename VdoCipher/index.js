function capitalizeParts(inStr) {
    let newString=[];
    let upperCaseFlag=false;
    let start=null;
    let end=null;
    // for(let i of inStr){
    //    if(i == '_') upperCaseFlag = !upperCaseFlag;
    //    else newString.push(upperCaseFlag?i.toUpperCase() : i);
    // }
        for(let i in inStr){
            if(inStr[i] == '_' && start == null ) start= i;
            else if(inStr[i]=='_' && start >=0 && end == null) end = i;

            if( start !=null  && end !=null){
                const upperCaseWord = newString.slice(start,end).join('').toUpperCase().split('');
                const length = newString.length;
                 newString.splice(start,upperCaseWord.length,...upperCaseWord)
                start=null;
                end=null;
                
            }
            else if(inStr[i] != '_'){
                newString.push(inStr[i])
            }
        
    }
    
    return newString
}
console.log(capitalizeParts('Hello _world_'))


