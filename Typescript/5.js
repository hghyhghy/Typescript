

//  remove duplicate 
 const removeduplicate = (a) => {
     const updated = []

     for (let element of a){

        if(!updated.includes(element)){
            updated.push(element)
        }
     }
     return  updated
 }

 console.log(removeduplicate([1,2,2,3,5,5,4]))