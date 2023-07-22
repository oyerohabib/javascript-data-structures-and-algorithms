// Wherefore art thou
// solution 1
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  let result = [];

  for (let i = 0; i < collection.length; i++) {
    const currentObj = collection[i];

    if (
      sourceKeys.every(
        (key) =>
          currentObj.hasOwnProperty(key) && currentObj[key] === source[key]
      )
    ) {
      result.push(currentObj);
    }
  }
  return result;
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

// solution 2
function whatIsInAName_1(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter((currentObj) =>
    sourceKeys.every(
      (key) => currentObj.hasOwnProperty(key) && currentObj[key] === source[key]
    )
  );
}

console.log(
  whatIsInAName_1(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

// slution 3 - using a hash table
function whatIsInAName_2(collection, source) {
  const sourceKeys = Object.keys(source);
  const sourceTable = {};

  for (const key of sourceKeys) {
    sourceTable[key] = source[key];
  }

  return collection.filter((currentObj) => {
    for (const key in sourceTable) {
      if (!(key in currentObj) || currentObj[key] !== sourceTable[key]) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName_2(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
