const input = ["4", "3", "3", "10"]   ;
function secondHeighest (arr){
    if(!Array.isArray(arr)) return -1;

    try {
    let highest = arr[0];
    let secondHeighest ;

        for(let i in arr){
            if(+highest < +arr[i]){
                if(conditionForSecondHighestValueUpdate(secondHeighest,arr[i])) secondHeighest = highest;
                    highest = arr[i];
                }
            else if(+highest > +arr[i] && conditionForSecondHighestValueUpdate(secondHeighest,arr[i])) secondHeighest = arr[i]    
        }

        return isNaN(secondHeighest)? -1: secondHeighest
    } catch (error) {
        return -1;
    }
    function conditionForSecondHighestValueUpdate(number,currentElement){
        return  isNaN(number) || +number < +currentElement
    }
}

console.log(secondHeighest(input))