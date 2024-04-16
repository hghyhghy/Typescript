

//  code for reverse words 

const reverseWords  =  (s) => {
    const words = s.trim().split(/\s+/)
    //  initializing the empty array 
    const reversewords = []

    for (let i = words.length -1 ; i>=0 ; i--){
        reversewords.push(words[i])
    }

    return reversewords.join(' ')

}

 const s= "the sky is blue"
 console.log(reverseWords(s))