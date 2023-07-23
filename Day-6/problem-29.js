// Sum All Primes
// solution 1
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimes(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}

console.log(sumPrimes(1000));

// solution 2
function sumPrimes_1(num) {
  // Create an array to mark prime numbers
  const primes = Array(num + 1).fill(true);

  // 0 and 1 are not primes
  primes[0] = primes[1] = false;

  // Mark non-prime numbers starting from 2
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }

  // Sum all prime numbers
  let result = 0;
  for (let i = 2; i <= num; i++) {
    if (primes[i]) {
      result += i;
    }
  }

  return result;
}

console.log(sumPrimes_1(6093));

// solution 3
function sumPrimes_2(num) {
  if (num <= 1) {
    return 0;
  }

  const primes = [2];
  for (let i = 3; i <= num; i += 2) {
    if (isPrime_1(i)) {
      primes.push(i);
    }
  }

  return primes.reduce((sum, prime) => sum + prime, 0);
}

function isPrime_1(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

console.log(sumPrimes_2(6295));
