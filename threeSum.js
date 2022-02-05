var threeSum = function(nums) {
    let length = nums.length;
    const triplets = [];
    const obj={}
    for(let i=0 ; i< length;i++){
            for(let j=i+1 ; j< length;j++){
                const thirdNumber = 0 - nums[i] -nums[j]
                if(thirdNumber in obj) triplets.push([nums[i],nums[j],thirdNumber])
                else {
                    obj[nums[i]]= true;
                    obj[nums[j]] =true
                }
        }
    }
    return triplets;
};