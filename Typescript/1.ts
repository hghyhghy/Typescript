

const ofmerge = (w1:string,w2:string) => {
    let newstring = ""
    const maxoftwo = Math.max(w1.length,w2.length)

    for (let i=0 ; i < maxoftwo ; i++){
        if(i < w1.length){
            newstring += w1[i]

        }
        if(i < w2.length){
            newstring += w2[i]

        }
    }
    return newstring;

}

 let w1="abc"
 let w2= "pqrs"
 console.log(ofmerge(w1,w2))
