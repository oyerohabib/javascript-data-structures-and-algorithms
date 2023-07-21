// Seek and Destroy
// solution 1
function destroyer(arr) {
  let remArr = Array.from(arguments).slice(1);
  let firstArr = Array.from(arguments)[0];
  return firstArr.filter((item) => !remArr.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// solution 2
function destroyer_1(arr, ...argsToRemove) {
  const valuesToRemove = new Set(argsToRemove);
  return arr.filter((item) => !valuesToRemove.has(item));
}

console.log(destroyer_1([1, 2, 3, 1, 2, 3], 2, 3));
