// Spinal Tap Case
// solution 1
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));

// solution 2
function spinalCase_1(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+|_+/g, "-")
    .toLowerCase();
}

console.log(spinalCase_1("This Is Spinal Tap"));
