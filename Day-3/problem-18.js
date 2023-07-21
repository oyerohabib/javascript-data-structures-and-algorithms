// Diff Two Arrays
// solution 1
function diffArray(arr1, arr2) {
  const newArr = [];
  let mergedArr = arr1.concat(arr2);
  for (let i = 0; i < mergedArr.length; i++) {
    if (arr1.includes(mergedArr[i]) && arr2.includes(mergedArr[i])) {
    } else {
      newArr.push(mergedArr[i]);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 2
function diffArray_1(arr1, arr2) {
  let diff1 = arr1.filter((item) => !arr2.includes(item));
  let diff2 = arr2.filter((item) => !arr1.includes(item));
  return diff1.concat(diff2);
}

console.log(diffArray_1([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 3
function diffArray_2(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let diff1 = arr1.filter((item) => !set2.has(item));
  let diff2 = arr2.filter((item) => !set1.has(item));
  return diff1.concat(diff2);
}

console.log(diffArray_2([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 4
function diffArray_3(arr1, arr2) {
  let newArr = [];
  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // or cann use this "!second.includes(first[i])"
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return newArr;
}
console.log(diffArray_3([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 5
function diffArray_4(arr1, arr2) {
  let newArr = [];

  function onlyInFirst(first, second) {
    for (const item of first) {
      if (!second.has(item)) {
        newArr.push(item);
      }
    }
  }
  // Convert arrays to Sets
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  // Use the Sets in the function
  onlyInFirst(set1, set2);
  onlyInFirst(set2, set1);

  return newArr;
}
console.log(diffArray_4([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 6
function diffArray_5(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}
console.log(diffArray_5([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 7
function diffArray_6(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}
console.log(diffArray_6([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// solution 8
function diffArray_7(arr1, arr2) {
  const difference = new Set(arr1);
  arr2.forEach((ele) =>
    difference.has(ele) ? difference.delete(ele) : difference.add(ele)
  );
  return Array.from(difference);
}
console.log(diffArray_7([1, 2, 3, 5], [1, 2, 3, 4, 5]));
