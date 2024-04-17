

//  filtered array 
const fn = (num:number,index:number) => num%2 === 0 || index%2 === 0 
const filteredarray =  (arr: number[], fn: (num: number, index: number) => boolean): number[]=> {

    const temp:number[]=[]
    for (let i=0 ; i<arr.length ; i++){
        if(fn(arr[i],i)){
            
            temp.push(arr[i])
        }
    }

    return temp
}

const arr:number[] = [1,2,3,4,5]
console.log(filteredarray(arr,fn))