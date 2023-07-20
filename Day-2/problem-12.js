// Slice and Splice
// solution 1 using splice and altering the original array
function frankenSplice(arr1, arr2, n) {
  arr2.splice(n, 0, ...arr1);
  return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// solution 2
function frankenSplice_1(arr1, arr2, n) {
  return arr2.slice(0, n).concat(arr1, arr2.slice(n));
}

console.log(frankenSplice_1([1, 2, 3], [4, 5, 6], 1));

// solution 3
function frankenSplice_2(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenSplice_2([1, 2, 3], [4, 5, 6], 1));
