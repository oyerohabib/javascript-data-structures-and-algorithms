// Truncate a String
// solution 1
function truncateString(str, num) {
  if (num > str.length || num === str.length) {
    return str;
  }

  return str.substr(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// solution 2
function truncateString_1(str, num) {
  return num >= str.length ? str : str.substr(0, num) + "...";
}

console.log(truncateString_1("A-tisket a-tasket A green and yellow basket", 8));
