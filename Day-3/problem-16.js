// Chunky Monkey
// solution 1
function chunkArrayInGroups(arr, size) {
  let result = [];
  let numOfCuts = Math.ceil(arr.length / size);
  console.log(numOfCuts);
  for (let i = 0; i < numOfCuts; i++) {
    let temp = arr.slice(0, size);
    result.push(temp);
    arr.splice(0, size);
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// solution 2
function chunkArrayInGroups_1(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArrayInGroups_1(["a", "b", "c", "d"], 2));

// solution 3
function chunkArrayInGroups_2(arr, size) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i += size;
  }
  return result;
}

console.log(chunkArrayInGroups_2(["a", "b", "c", "d"], 2));

// solution 4
function chunkArrayInGroups_3(arr, size) {
  let result = [];
  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunkArrayInGroups_3(["a", "b", "c", "d"], 2));
