// Binary Agents
// solution 1
function binaryAgent(str) {
  return str
    .split(" ")
    .map((value) => parseInt(value, 2))
    .map((value) => String.fromCharCode(value))
    .join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

// solution 2
function binaryAgent_1(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";
  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;
        // Record the decimal value by adding the number to the previous one.
      }
    }
    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);
    // Reset decimal value for next binary number.
    decValue = 0;
  }
  return sentence;
}

// test here
console.log(
  binaryAgent_1(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
