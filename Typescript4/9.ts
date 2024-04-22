  
//    single nnumber 

var singleNumber = function(nums:number[]){

    let seen = new Set()
    // .initializing empty set

    for (let num of nums){

        if(seen.has(num)){

            seen.delete(num)
        }
        else{

            seen.add(num)
        }
    }

    return seen.values().next().value
}

const nums:number[]= [1,2,1,3,3]
console.log(singleNumber(nums))