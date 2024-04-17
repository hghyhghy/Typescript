

const applyMapping = <T, U>(arr: T[], fn: (element: T, index: number) => U): U[] => {
    const transformedArray: U[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(fn(arr[i], i));
    }
    
    return transformedArray;
};

// Example usage
const arr: number[] = [1, 2, 3, 4, 5];
const fn = (num: number, index: number): string => `Number ${num} at index ${index}`;
console.log(applyMapping(arr, fn));
