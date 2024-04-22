function letterCombinations(digits: string): string[] {
   if (digits.length === 0) {
       return [];
   }

   const digitToLetters: Record<string, string[]> = {
       '2': ['a', 'b', 'c'],
       '3': ['d', 'e', 'f'],
       '4': ['g', 'h', 'i'],
       '5': ['j', 'k', 'l'],
       '6': ['m', 'n', 'o'],
       '7': ['p', 'q', 'r', 's'],
       '8': ['t', 'u', 'v'],
       '9': ['w', 'x', 'y', 'z']
   };

   let combinations: string[] = [""];
   
   for (let digit of digits) {
       const letters = digitToLetters[digit] || [];
       let updatedCombinations: string[] = [];

       for (let combination of combinations) {
           for (let letter of letters) {
               updatedCombinations.push(combination + letter);
           }
       }

       combinations = updatedCombinations;
   }

   return combinations;
}

const digit = "23";
console.log(letterCombinations(digit));
