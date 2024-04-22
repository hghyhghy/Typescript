 
//  moving zeroes 

 var moveZeroes  = function(nums){

    let temp = 0 

    for ( let i=0 ; i<nums.length ; i++) {

     if(nums[i] !== 0){
        nums[temp++]= nums[i] }
    }

    for (let i=temp ; i<nums.length ; i++){

        nums[i]= 0
    }

    return nums
 }

let n =[0,2,1,4,0]
console.log(moveZeroes(n))