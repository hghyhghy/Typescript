
var longestCommonPrefix = function(str:string[]){

    if(str.length === 0){
        return false;
    }

    for (let i=0 ; i<str[0].length ; i++){

        let c= str[0][i]

        //  iterating through the rest of the strings 
        for (let  j=1 ; j<str.length ; ++j){

            if(str[i][i] !== c){

                return str[0].substring(0,i)
            }
        }
    }

    return str[0]
}

const strs:string[] = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs);
console.log("Longest common prefix:", result);