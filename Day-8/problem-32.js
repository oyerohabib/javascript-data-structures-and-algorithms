// Steamroller
// solution 1
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",")
    .split(",")
    .map(function (value) {
      if (value === "[object Object]") {
        return {};
      } else if (isNaN(value)) {
        return value;
      } else {
        return parseInt(value);
      }
    });
}
console.log(steamrollArray([1, [], [3, [[4]]]]));

// solution 2
function steamrollArray_1(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray_1(flat) : flat;
}
console.log(steamrollArray_1([1, [], [3, [[4]]]]));

// solution 3
function steamrollArray_2(arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray_2(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}
console.log(steamrollArray_2([1, [], [3, [[4]]]]));

// solution 4
function steamrollArray_3(arr) {
  let result = [];

  function flattenArray(element) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flattenArray(item);
      }
    } else {
      result.push(element);
    }
  }

  flattenArray(arr);
  return result;
}
console.log(steamrollArray_3([1, [], [3, [[4]]]]));
