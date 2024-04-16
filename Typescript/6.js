//   two sum

const twoSum = (nums,target) => {
    const myhash ={}

    for (let i =0 ; i<nums.length ; i++){
        
        const complement = target - nums[i] 
        if(myhash[complement] !== undefined){
            
            return[myhash[complement],i]
        }

        myhash[nums[i]] = i
    }

    return []

}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 
