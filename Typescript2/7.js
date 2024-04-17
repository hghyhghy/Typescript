function expect(val) {
    return {
        toBe: function(expected) {
            if (val !== expected) {
                throw new Error("Not equal");
            }
            return true;
        },
        notToBe: function(expected) {
            if (val === expected) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

// Example usage:
try {
    const result = () => expect(5).toBe(5); // This line is expected to throw an error if not equal
    console.log({ value: result() });
} catch (error) {
    console.log({ error: error.message });
}
