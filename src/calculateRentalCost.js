/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  let amount = 0;

  if (days >= 7) {
    amount = price * days - 50;
  } else if (days >= 3) {
    amount = price * days - 20;
  } else {
    amount = price * days;
  }

  return amount;
}

module.exports = calculateRentalCost;
