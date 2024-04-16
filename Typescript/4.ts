  
  const isSubsequence  = (a:string,b:string) => {
    let asub = 0 
    let bsub = 0 

    //  iterate through both strings 
    while ( asub < a.length && bsub < b.length){

        if(a[asub] === b[bsub]){
            //  incrementing the a pointer 
          asub ++;
        }

        //  incrementing the b pointer 

        bsub ++
    }

     return asub === a.length;

  }

  console.log(isSubsequence("abc","avbfc"))