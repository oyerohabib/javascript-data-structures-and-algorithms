// Confirm the Ending
// solution 1
function confirmEnding(str, target) {
  return str.endsWith(target);
}

console.log(confirmEnding("Bastian", "n"));

// solution 2
function confirmEnding_1(str, target) {
  let lastWord = str.substr(-target.length);
  return lastWord === target;
}

console.log(confirmEnding_1("Bastian", "n"));
