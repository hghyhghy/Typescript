
//  dupliactes 

var containsDuplicate = function(n:number[]){
     
    let seen = new Set()

    for (let num of n){

        if(seen.has(num)){
            
            return true;
        }
        seen.add(num)
    }
   
    return false

}

let n:number[] =[1,2,3,4]
console.log(containsDuplicate(n))