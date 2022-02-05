const input= ['hello','mellow', 'in the deepsleep'];

// const vowls= ['a','e','i','o','u'];
const vowls= {
    a:1,
    e:1,
    i:1,
    o:1,
    u:1
}
console.log(findVowls(input))
function findVowls(arr){
    const wordsLength = arr.length;

    const total = arr.join('').split('').reduce((total,current)=> vowls[current]?total+1:total,0);

    const avg=(total/wordsLength)
    return {total,avg}
}


