// Pig Latin
// solution 1
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str.concat("way");
  const consonantGrp = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantGrp.length).concat(consonantGrp).concat("ay");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));

// solution 2
function translatePigLatin_1(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

console.log(console.log(translatePigLatin_1("consonant")));
console.log(console.log(translatePigLatin_1("algorithm")));

// solution 3
function translatePigLatin_2(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(console.log(translatePigLatin_2("consonant")));
console.log(console.log(translatePigLatin_2("algorithm")));
