// Sum All Numbers in a Range
// solution 1

function sumAll(arr) {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let total = 0;
  for (let i = minNum; i <= maxNum; i++) {
    total += i;
  }
  return total;
}

// console.log(sumAll([1, 4]));
console.log(sumAll([5, 2000]));

// solution 2
function sumAll_1(arr) {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let n = maxNum - minNum + 1;
  return ((minNum + maxNum) * n) / 2;
}

console.log(sumAll_1([5, 20000]));
