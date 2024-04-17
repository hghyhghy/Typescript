 
//  
class Arraywrapper {

    constructor(array){
        this.array = array

    }



 static add(a1,a2){
    
    let empty = []
    //  initializing empty array
    for ( let i=0 ; i< Math.max(a1.array.length,a2.array.length) ; i++){

        empty[i] = (a1.array[i] || 0) + (a2.array[i] || 0)
    }

    return new Arraywrapper(empty)

 }

 toString(){
    return `[${this.array.join(',')}]`;
 }

}

const arr1 =  new Arraywrapper([1,2,3])
const arr2 =  new Arraywrapper([4,5,6])

const sumArray = Arraywrapper.add(arr1, arr2);
console.log(sumArray.toString());


