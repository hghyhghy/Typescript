
//  function twosum

var twoSum = function(nums:number[],target:number){

    const map  =  new Map()

    for (let i=0 ; i<nums.length ; i++){

        const complement = target - nums[i]

        if( map.has(complement)){

            return[map.get(complement),i]
        }

        map.set(nums[i],i)
    }
}

const nums = [2,7,5,6]
const target = 9
console.log(twoSum(nums,target))