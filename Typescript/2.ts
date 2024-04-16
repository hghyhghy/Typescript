const  reverseVowels = (s:string) => {
    const  chars = s.split("")
    const  vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let left = 0
    let right = chars.length - 1

    while( left < right ){
        while (left<right && !vowel.has(chars[left])){
            left ++
        }
        while( left < right && !vowel.has(chars[right])){
            right --
        }
        
        //  swpping two characters 
        [chars[left],chars[right]] = [chars[right],chars[left]]

        left ++;
        right --

    }
    //  convert array back go string 
    return chars.join( ' ')

}

const s = "hello"
console.log(reverseVowels(s))