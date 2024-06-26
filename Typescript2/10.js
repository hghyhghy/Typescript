
var romanToInt = function(s){

    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0

    for (let i =0 ; i< s.length ; i++){

        const currval =  romanValues[s[i]]
        const nextval = romanValues-s[i+1]

        if( nextval && currval < nextval){

            result -= currval
        } else{

            result += currval
        }
    }

    return result
} 

 console.log(romanToInt("III"))