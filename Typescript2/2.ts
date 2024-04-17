 
async function sleep(mills:number){

    return new Promise(resolve => {

        setTimeout(resolve,mills)
    })
}

async function example (){
    console.log("sleep")
    await sleep(2000)
    console.log("Wake up")
}

example()