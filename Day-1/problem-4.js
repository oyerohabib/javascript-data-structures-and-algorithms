// Find the Longest Word in a String
// solution 1
function findLongestWordLength(str) {
  const words = str.split(" ");
  let wordArray = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].length;
    wordArray.push(word);
  }
  return Math.max(...wordArray);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// solution 2
function findLongestWordLength_1(str) {
  let words = str.split(" ");
  console.log(words);
  let longestlength = 0;
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    longestlength = Math.max(longestlength, wordLength);
  }
  console.log(words[longestlength]);
  return longestlength;
}

console.log(
  findLongestWordLength_1("The quick brown fox jumped over the lazy dog")
);

function findLongestWordLength_2(str) {
  let words = str.split(" ");
  let wordsLength = words.map((word) => word.length);
  return Math.max(...wordsLength);
}

console.log(
  findLongestWordLength_2("The quick brown fox jumped over the lazy dog")
);
