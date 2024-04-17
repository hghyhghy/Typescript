
 var isPalindrome = function(x:number){

    let str = x.toString()
    let revrese = str.split("").reverse().join("")

    return str === revrese
 }

 console.log(isPalindrome(121))