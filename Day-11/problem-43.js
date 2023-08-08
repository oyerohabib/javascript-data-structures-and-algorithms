// Find the Symmetric Difference
// solution 1
function sym(...arrays) {
  // Initialize the symmetric difference with the first array
  let result = arrays[0];

  // Loop through the remaining arrays
  for (let i = 1; i < arrays.length; i++) {
    const currentArray = arrays[i];

    // Find elements in the current array that are not in the result
    const elementsNotInResult = currentArray.filter(
      (element) => !result.includes(element)
    );
    // Find elements in the result that are not in the current array
    const elementsNotInCurrentArray = result.filter(
      (element) => !currentArray.includes(element)
    );
    // Combine the two sets of elements to update the result
    result = [...elementsNotInResult, ...elementsNotInCurrentArray];
  }

  // Remove duplicate elements from the result using Set
  return Array.from(new Set(result));
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

// solution 2
function sym_1(...arrays) {
  // Function to find the symmetric difference between two arrays
  function symmetricDifference(array1, array2) {
    return array1
      .filter((element) => !array2.includes(element))
      .concat(array2.filter((element) => !array1.includes(element)));
  }

  // Recursive function to compute the symmetric difference of an array of arrays
  function multiSymmetricDifference(arrays) {
    if (arrays.length === 1) {
      return arrays[0]; // Base case: return the last array
    }

    const firstArray = arrays.shift(); // Take the first array
    const secondArray = multiSymmetricDifference(arrays); // Recursively find symmetric difference for the rest

    return symmetricDifference(firstArray, secondArray);
  }

  // Compute the symmetric difference of all arrays
  const result = multiSymmetricDifference(arrays);

  // Remove duplicate elements from the result using Set
  return Array.from(new Set(result));
}

// Example usage
console.log(sym_1([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
