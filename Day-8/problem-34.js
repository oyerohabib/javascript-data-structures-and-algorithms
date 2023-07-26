// Everything Be True
// solution 1
function truthCheck(collection, pre) {
  let counter = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      counter++;
    }
  }
  return counter === collection.length;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);

// solution 2
function truthCheck_1(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

console.log(
  truthCheck_1(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);

// solution 3
function truthCheck_2(collection, pre) {
  return collection.every((element) => element[pre]);
}

console.log(
  truthCheck_2(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
