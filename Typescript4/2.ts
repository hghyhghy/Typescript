 
  var PlusOne  = function(s:number[]) {

    let n = s.length;

    //  iterating over the numbers 
    for ( let i=n-1 ; i>=0 ; i--){

        s[i] ++

        if(s[i] === 10){
            
            s[i] = 0
        }
        else{

            return s
        }
    }

    return [1,...s]
  }
let s:number[]=[1,2,3]
console.log(PlusOne(s))