var once = function(fn: (...args: number[]) => number) {
  let isCalled = false;
  let result: number;

  return function(...args: number[]) {
      if (!isCalled) {
          result = fn(...args);
          isCalled = true;
          return result;
      } else {
          return undefined;
      }
  };
};

function add(a: number, b: number) {
  return a + b;
}

const addOnce = once(add);

console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(2, 5)); // Output: undefined
