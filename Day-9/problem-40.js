// Caesars Cipher
// solution 1
function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let isUpperCaseLetter = charCode >= 65 && charCode <= 90;

    if (isUpperCaseLetter) {
      let shiftedCode = charCode + 13;
      if (isUpperCaseLetter && shiftedCode > 90) {
        shiftedCode -= 26;
      }
      result += String.fromCharCode(shiftedCode);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));

// solution 2
// catering for all cases including lowercase
function rot13_1(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let isUpperCaseLetter = charCode >= 65 && charCode <= 90;
    let isLowerCaseLetter = charCode >= 97 && charCode <= 122;

    if (isUpperCaseLetter || isLowerCaseLetter) {
      let shiftedCode = charCode + 13;
      if (
        (isUpperCaseLetter && shiftedCode > 90) ||
        (isLowerCaseLetter && shiftedCode > 122)
      ) {
        shiftedCode -= 26;
      }
      result += String.fromCharCode(shiftedCode);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(rot13_1("SERR PBQR PNZC"));
