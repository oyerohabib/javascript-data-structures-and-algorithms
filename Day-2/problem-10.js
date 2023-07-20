// Boo who
// solution 1

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

function booWho_1(bool) {
  return typeof bool === "boolean";
}

console.log(booWho_1(null));
console.log(booWho_1(true));
console.log(booWho_1(false));
console.log(booWho_1(0));
