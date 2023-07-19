// Repeat a String Repeat a String
// solution 1
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));

// solution 2

function repeatStringNumTimes_1(str, num) {
  if (num < 0) {
    return "";
  }
  return str.repeat(num);
}

console.log(repeatStringNumTimes_1("abc", 3));

// solution 3

function repeatStringNumTimes_2(str, num) {
  if (num <= 0) {
    return "";
  }
  return str + repeatStringNumTimes_2(str, num - 1);
}

console.log(repeatStringNumTimes_2("abc", 3));
