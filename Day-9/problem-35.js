// Arguments Optional
// solution 1
function addTogether() {
  let array = [...arguments];
  if (array.some((value) => typeof value !== "number")) return undefined;
  if (array.length === 1) {
    return function (secondArg) {
      if (typeof secondArg !== "number") return undefined;
      return array[0] + secondArg;
    };
  }
  return array.reduce((total, item) => (total += item));
}

// console.log(addTogether(2, 3));
console.log(addTogether("2", 3));

// solution 2
function addTogether_1() {
  const [first, second] = arguments;
  if (typeof first === "number") {
    if (typeof second === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether_1(first, second);
  }
}

// console.log(addTogether(2, 3));
console.log(addTogether_1("2", 3));
