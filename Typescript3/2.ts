
//   valid parenthesis 

var isValid  = function(s:string){

    let stack:string[] = []
    // initializing an empty array 
    let opening = ['(','{','[']
    let closing = [')',"}","]"]
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    //  iterating through the  chars of s 

    for ( let char of s){

        if(opening.includes(char)){

            stack.push(char)
        }

        else if(closing.includes(char)){

            if(stack.length === 0){

                return false 
            }

            let lastelement =  stack.pop()
            if(bracketMap[char] !== lastelement){

                return false
            }
        }
    }

    return stack.length === 0;
}

let s:string ="({[]})"
console.log(isValid(s))