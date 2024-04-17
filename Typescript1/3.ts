
 var reduce = function(nums:number[],fn:(accumulator:number,currentlvalue:number) =>number,init:number) {

    let value:number = init

    for (let i=0; i<nums.length ; i++){
        
       value = fn(value,nums[i])
    }

    return value

 }

let nums = [1,2,3,4,5]
let init = 0
const fn = (accumulator:number , currentvalue:number) => accumulator + currentvalue
console.log(reduce(nums,fn,init))