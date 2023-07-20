// Falsy Bouncer
// solution 1
function bouncer(arr) {
  return arr.filter((item) => Boolean(item));
}

console.log(bouncer([7, "ate", "", false, 9]));

// solution 2
function bouncer_1(arr) {
  return Array.from(arr).filter(Boolean);
}

console.log(bouncer_1([7, "ate", "", false, 9]));
