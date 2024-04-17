
  
  var chunk = function(arr:number[] , size:number){

    const chunkarray:number[][] = []

    for ( let i=0 ; i< arr.length ; i += size){
        chunkarray.push(arr.slice(i,i+size))
    }

    return chunkarray
  }

   const arr = [1,2,3,4,5,6,7,8,9]
   const size = 3
   console.log(chunk(arr,size))