// Smallest Common Multiple
// solution 1
function findSCM(num1, num2) {
  let lowNum = Math.min(num1, num2);
  let highNum = Math.max(num1, num2);
  for (let i = highNum; i <= lowNum * highNum; i += highNum) {
    if (i % lowNum === 0) {
      return i;
    }
  }
}

function smallestCommons(arr) {
  let lowNum = Math.min(...arr);
  let highNum = Math.max(...arr);
  let SCM = findSCM(...arr);
  for (let i = lowNum; i <= highNum; i++) {
    if (SCM % i !== 0) {
      SCM = findSCM(SCM, i);
    }
  }
  return SCM;
}

console.log(smallestCommons([23, 18]));

// solution 2
function gcd(a, b) {
  // Euclidean algorithm to find the greatest common divisor
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(210, 45));

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons_1(arr) {
  let lowNum = Math.min(...arr);
  let highNum = Math.max(...arr);
  let scm = lowNum;
  for (let i = lowNum + 1; i <= highNum; i++) {
    scm = lcm(scm, i);
  }
  return scm;
}

console.log(smallestCommons_1([7, 10]));

// solution 3
function smallestCommons_2(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(smallestCommons_2([7, 10]));
