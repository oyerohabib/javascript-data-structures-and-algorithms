// DNA Pairing
// solution 1
function pairElement(str) {
  let result = [];
  let DNA = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let newStr = str.split("");
  newStr.forEach((str) => {
    result.push([str].concat(DNA[str]));
  });
  return result;
}

console.log(pairElement("GCG"));

// solution 2
function pairElement_1(str) {
  let DNA = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return str.split("").map((str) => [str, DNA[str]]);
}

console.log(pairElement_1("GCG"));

// solution 3
function pairElement_2(str) {
  const pairString = (char) => {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(pairString(str[i]));
  }
  return result;
}

console.log(pairElement_2("GCG"));
