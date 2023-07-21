// Mutations
// solution 1
function mutation(arr) {
  let target = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));

// solution 2
function mutation_1(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);
}

console.log(mutation_1(["hello", "hey"]));
console.log(mutation_1(["Alien", "line"]));

// solution 3
function mutation_2(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation_2(["hello", "hey"]));
console.log(mutation_2(["Alien", "line"]));

// solution 4
function mutation_3(arr) {
  let target = arr[0].toLowerCase();
  let test = arr[1].toLowerCase().split("");
  return test.every((letter) => target.includes(letter));
}

console.log(mutation_3(["hello", "hey"]));
console.log(mutation_3(["Alien", "line"]));
