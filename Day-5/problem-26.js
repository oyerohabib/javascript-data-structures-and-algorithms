// Sorted Union
// solution 1
function uniteUnique(arr, ...arguments) {
  return Array.from(new Set(arr.concat(...arguments)));
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// solution 2
function uniteUnique_1() {
  return [...arguments].flat().filter((item, i, arr) => {
    return arr.indexOf(item) === i;
  });
}

console.log(uniteUnique_1([1, 3, 2], [5, 2, 1, 4], [2, 1]));
