// Inventory Update
// solution 1
function updateInventory(arr1, arr2) {
  // Concatenate the arrays
  const concatenatedArray = arr1.concat(arr2);

  // Sort the array by item name using a custom comparison function
  const updatedInventory = concatenatedArray.sort((a, b) => {
    // a[1].localeCompare(b[1]) - alternative to the below.
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
  //   [[21, "Bowling Ball"], [67, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"],
  //   [2, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]];

  // Merge items with the same name and update quantities
  const mergedInventory = [];
  let currentItem = updatedInventory[0];
  for (let i = 1; i < updatedInventory.length; i++) {
    if (currentItem[1] === updatedInventory[i][1]) {
      currentItem[0] += updatedInventory[i][0];
    } else {
      mergedInventory.push(currentItem);
      currentItem = updatedInventory[i];
    }
  }
  mergedInventory.push(currentItem);

  return mergedInventory;
}

// Example inventory lists
const curInv_1 = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv_1 = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv_1, newInv_1));

// solution 3
function updateInventory_2(arr1, arr2) {
  const inventoryMap = new Map();

  // Populate the inventory map with the initial inventory (arr1)
  for (const [quantity, item] of arr1) {
    inventoryMap.set(item, quantity);
  }

  // Update the inventory map with the fresh delivery (arr2)
  for (const [quantity, item] of arr2) {
    if (inventoryMap.has(item)) {
      inventoryMap.set(item, inventoryMap.get(item) + quantity);
    } else {
      inventoryMap.set(item, quantity);
    }
  }

  // Convert the inventory map to a sorted array
  const updatedInventory = [...inventoryMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([item, quantity]) => [quantity, item]);

  return updatedInventory;
}

// Example inventory lists
const curInv_3 = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv_3 = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

const updatedInventory_2 = updateInventory_2(curInv_3, newInv_3);
console.log(updatedInventory_2);
