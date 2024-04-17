

var isEmpty = function(obj: any) { // Corrected type annotation
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === "object" && obj !== null) {
        return Object.keys(obj).length === 0;
    }
    return false;
}

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
const emptyObject = {};
const nonEmptyObject = { key: 'value' };

console.log(isEmpty(emptyArray));     // Output: true
console.log(isEmpty(nonEmptyArray));  // Output: false
console.log(isEmpty(emptyObject));    // Output: true
console.log(isEmpty(nonEmptyObject)); // Output: false
