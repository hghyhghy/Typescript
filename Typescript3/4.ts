//   remove duplicates 

var removeDuplicates = function(nums:number[]){

    if(nums.length === 0){
        return 0
    }

    let pointer = 1
    //  pointer initailized to 1 as we assumed all the 0 indexed element are unique 
    for (let i=1 ; i<nums.length ; i++){
        //  check whether current element is same as previous element 
        if(nums[i] !== nums[i-1]){

            nums[pointer] = nums[i]
            pointer ++
        }
    }

    return pointer
}

 let nums:number[] = [1,1,2,3,4,4,5,5]
 console.log(removeDuplicates(nums))
 console.log(nums.slice(0,5))