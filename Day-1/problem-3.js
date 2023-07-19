// factorialize a number
// solution 1
function factorialize(num) {
  if (num < 0) {
    return "Error: Factorials don't work for -ve";
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialize(50));

// solution 2
function factorialize_1(num) {
  if (num < 0) {
    return "Error: Factorials don't work for -ve";
  }
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialize_1(num - 1);
}

console.log(factorialize_1(50));

// solution 3

function factorialize_2(num) {
  if (num < 0) {
    return "Error: Factorials don't work for -ve";
  }
  let factorial = 1;
  while (num > 0) {
    factorial *= num;
    num--;
  }
  return factorial;
}

console.log(factorialize_2(50));
