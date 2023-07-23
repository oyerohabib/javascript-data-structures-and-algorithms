// Search and Replace
// solution 1
function isUpperCase(str) {
  return str === str.toUpperCase();
}
function myReplace(str, before, after) {
  isUpperCase(before[0])
    ? (after = after[0].toUpperCase() + after.substring(1))
    : (after = after[0].toLowerCase() + after.substring(1));
  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

// solution 2
function myReplace_1(str, before, after) {
  /^[A-Z]/.test(before[0])
    ? (after = after[0].toUpperCase() + after.substring(1))
    : (after = after[0].toLowerCase() + after.substring(1));
  return str.replace(before, after);
}

console.log(
  myReplace_1("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
