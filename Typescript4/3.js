 
 var reverse = function(x){
     
    let max = Math.pow(2,32) - 1
    let min = -Math.pow(2,32)

    let sign  = x<0 ? -1 : 1
    x=Math.abs(x)


    let reversed  = 0

    while( x!== 0){

        let digit = x%10
        if(reversed > Math.floor(max/10) || reversed === Math.floor(max/10) && digit > 7){

            return 0
        }
        reversed = reversed*10 + digit
        x= Math.floor(x/10)
    }

    if( reversed > max || reversed < min){

        return 0
    }

    return reversed*sign
 }

let x= 123
console.log(reverse(x))