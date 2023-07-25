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
