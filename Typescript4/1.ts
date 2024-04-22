// length of last word 

var lengthOfLastWord = function(s:string){

    // trimming the trailing spaces 
    s= s.trim()
    // creating empty length 
    let length = 0
    // iterating over the array

    for (let i =s.length -1 ; i>=0 ; i--){

        if(s[i] === " "){
            break;
        }

        length ++
    }

    return length
}

let s:string= "Hello World"
console.log(lengthOfLastWord(s))