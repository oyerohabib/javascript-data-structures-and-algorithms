// Return Largest Numbers in Arrays
// solution 1
function largestOfFour(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(Math.max(...arr[i]));
  }
  return finalArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// solution 2
function largestOfFour_1(arr) {
  return arr.reduce((result, subArray) => {
    result.push(Math.max(...subArray));
    return result;
  }, []);
}

console.log(
  largestOfFour_1([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// solution 3
function largestOfFour_2(arr) {
  return arr.map((subArray) => Math.max(...subArray));
}

console.log(
  largestOfFour_2([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
