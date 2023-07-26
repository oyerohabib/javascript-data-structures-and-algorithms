// Drop it
// solution 1
function dropElements(arr, func) {
  let i = arr.indexOf(arr.find(func));
  return i === -1 ? [] : arr.slice(i);
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

// solution 2
function dropElements_1(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(
  dropElements_1([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

// solution 3
function dropElements_2(arr, func) {
  let i = 0;
  while (i < arr.length && !func(arr[i])) {
    i++;
  }
  return i === arr.length ? [] : arr.slice(i);
}

console.log(
  dropElements_2([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
