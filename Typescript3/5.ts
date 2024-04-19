var removeElement = function(nums:number[], target:number) {
    let pointer = 0;

    // Iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            // Only update nums at indices greater than or equal to pointer
            nums[pointer] = nums[i];
            pointer++;
        }
    }

    return pointer;
};

// Example usage:
let nums:number[] = [0, 1, 2, 2, 3, 0, 4, 2];
let target:number = 2;
let remove = removeElement(nums, target);
console.log("Array after removing ", nums.slice(0, remove));
console.log(remove);
