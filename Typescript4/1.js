
//  missing number 

var missingNumber  = function(nums){

    let len = nums.length
    let actual = 0

    for (let i=0 ; i<len ; i++){

        actual += nums[i]
    }

    const expected  = (len *(len+1))/2

    return expected - actual
}

let a  = [3,0,1]
console.log(missingNumber(a))