var createCounter =  function(init:number) {

    let currval:number =  init

    return {

        increment:function(){
            
            return  ++currval
        },

        decerement:function(){

            return --currval

        },

        reset:function(){
            
            currval = init
            return currval
        }


    }
}

const counter  = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decerement())
