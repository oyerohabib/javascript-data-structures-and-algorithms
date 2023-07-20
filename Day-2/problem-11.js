// Title Case a Sentence

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
