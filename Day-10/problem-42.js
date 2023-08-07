// Cash Register
// solution 1
function checkCashRegister(price, cash, cid) {
  // Define the currency units and their values in cents
  const currencyUnits = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000],
  ];

  // Calculate the change amount required in cents
  let changeNeeded = (cash - price) * 100;
  console.log(changeNeeded);

  // Calculate the total cash in the drawer in cents
  let totalCid = cid.reduce((acc, curr) => acc + curr[1] * 100, 0);

  // Check if there's enough cash in the drawer to provide the change
  if (totalCid < changeNeeded) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if the total cash in the drawer is equal to the change needed
  if (totalCid === changeNeeded) {
    return { status: "CLOSED", change: cid };
  }

  // Initialize an empty array to store the change
  let change = [];

  // Loop through the currency units in reverse order (from highest to lowest)
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const [unit, value] = currencyUnits[i];
    const unitInDrawer = cid[i][1] * 100;

    // If the value of the currency unit is less than or equal to the change needed
    if (value <= changeNeeded) {
      // Calculate the maximum number of this currency unit that can be used
      const maxUnits = Math.floor(unitInDrawer / value);
      // Calculate the actual number of units to be used
      const unitsToUse = Math.min(maxUnits, Math.floor(changeNeeded / value));
      // Calculate the amount in cents for the units to be used
      const amountToUse = unitsToUse * value;

      // Reduce the change needed and the cash in the drawer accordingly
      changeNeeded -= amountToUse;
      totalCid -= amountToUse;

      // Push the used currency unit and amount to the change array
      if (unitsToUse > 0) {
        change.push([unit, amountToUse / 100]);
      }
    }
  }

  // If there's still change needed, it means we don't have enough denominations to make exact change
  if (changeNeeded > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // If all the change has been given, return the change array with status "OPEN"
  return { status: "OPEN", change: change };
}

const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
console.log(checkCashRegister(3.26, 100, cid));
