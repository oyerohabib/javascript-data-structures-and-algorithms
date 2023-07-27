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

function palindrome_1(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reversedString = cleanStr.split("").reverse().join("");
  return cleanStr === reversedString;
}

console.log(palindrome_1("2A3*3a2"));
console.log(palindrome_1("2A3 3a2"));
console.log(palindrome_1("2_A3*3#A2"));
console.log(palindrome_1("eye"));
console.log(palindrome_1("race car"));
