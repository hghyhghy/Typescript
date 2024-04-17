 
//  calling the last element 
 
Array.prototype.last = function(){

    //  check wheather its empty 

    if(this.length === 0){
         return -1
    }
    else{

        return this[this.length -1 ]
    }

}

const arr = [1,2,34]
console.log(arr.last())
const arr1 = []
console.log(arr1.last())

