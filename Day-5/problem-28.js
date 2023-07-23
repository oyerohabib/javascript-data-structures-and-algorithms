// Sum All Odd Fibonacci Numbers
// solution 1
function sumFibs(num) {
  if (num <= 1) {
    return 0;
  }
  let prevNum = 0;
  let currNum = 1;
  let result = 0;
  while (currNum <= num) {
    if (currNum % 2 === 1) {
      result += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return result;
}

console.log(sumFibs(4));
