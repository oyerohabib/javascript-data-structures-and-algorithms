// Palindrome Checker
// soluton 1
function palindrome(str) {
  let reversedString = str
    .replace(/\W|_/g, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  if (str.replace(/\W|_/g, "").toLowerCase() === reversedString) {
    return true;
  }
  return false;
}

console.log(palindrome("2A3*3a2"));
console.log(palindrome("2A3 3a2"));
console.log(palindrome("2_A3*3#A2"));
console.log(palindrome("eye"));
console.log(palindrome("race car"));
