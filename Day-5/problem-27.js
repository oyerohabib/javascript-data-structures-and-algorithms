// Convert HTML Entities
// solution 1
const pairs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertHTML(str) {
  let result = "";
  str.split("").map((char, i) => {
    if (pairs.hasOwnProperty(char)) {
      result += pairs[char];
    } else {
      result += char;
    }
  });
  return result;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// solution 2
function convertHTML_1(str) {
  return str.replace(/[&<>'"]/g, (match) => pairs[match]);
}

console.log(convertHTML_1("Hamburgers < Pizza < Tacos"));
