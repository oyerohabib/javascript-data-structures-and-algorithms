// Missing letters
// solution 1
function fearNotLetter(str) {
  let charArr = [];
  str.split("").forEach((letter) => {
    charArr.push(letter.charCodeAt());
  });
  let differences = [];
  charArr.forEach((value, index) => {
    index > 0
      ? differences.push(value - charArr[index - 1])
      : differences.push(0);
  });
  console.log(differences);
  return differences.includes(2)
    ? String.fromCharCode(charArr[differences.indexOf(2)] - 1)
    : undefined;
}

console.log(fearNotLetter("abce"));

// solution 2
function fearNotLetter_1(str) {
  let missingLetter;
  str.split("").forEach((char, i) => {
    if (i > 0) {
      let prevChar = str.charCodeAt(i - 1);
      let currentChar = str.charCodeAt(i);
      if (currentChar - prevChar > 1) {
        missingLetter = String.fromCharCode(prevChar + 1);
      }
    }
  });
  return missingLetter;
}

console.log(fearNotLetter_1("abce"));
