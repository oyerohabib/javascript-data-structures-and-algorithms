// No Repeats Please
// solution 1
function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  let regex = /(.)\1+/;

  // Split the string into an array of characters.
  const arr = str.split("");
  const permutations = [];
  let tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter(function (string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

console.log(permAlone("aab"));

// solution 2
function permAlone_1(str) {
  const regex = /(.)\1+/; // Regular expression to match repeated consecutive characters

  // Function to swap characters at positions i and j in the string
  function swap(strArr, i, j) {
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
  }

  // Recursive function to generate permutations
  function generatePermutations(strArr, index) {
    if (index === strArr.length - 1) {
      // Check if the current permutation has repeated consecutive characters
      if (!regex.test(strArr.join(""))) {
        validPermutations.push(strArr.join(""));
      }
      return;
    }

    for (let i = index; i < strArr.length; i++) {
      swap(strArr, index, i);
      generatePermutations([...strArr], index + 1); // Recursive call
      swap(strArr, index, i); // Backtrack
    }
  }

  const validPermutations = [];
  generatePermutations(str.split(""), 0); // Convert the string to an array and start generating permutations

  return validPermutations.length;
}

console.log(permAlone_1("abcdefg"));
