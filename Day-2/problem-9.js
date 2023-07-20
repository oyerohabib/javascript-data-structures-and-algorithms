// Finders Keepers
// solution 1
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// solution 2
function findElement_1(arr, func) {
  return arr.find(func);
}

console.log(findElement_1([1, 2, 3, 4], (num) => num % 2 === 0));
