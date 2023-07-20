// Where do I Belong
// solution 1

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }
}

console.log(getIndexToIns([40, 60], 50));

// solution 2

function getIndexToIns_1(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns_1([40, 60], 50));
