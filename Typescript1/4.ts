//  length of argumnet passed through it 
  
const argumentLength = (args:any[]) => {

    let count = 0
    for ( let arg in args  ){
        count += 1
    }
    return count
}

console.log(argumentLength([1,2]))
console.log(argumentLength(["",1,3]))