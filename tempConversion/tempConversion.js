const ftoc = function(freinInput) {
  const freinConverted = (5/9 * (freinInput-32));
  const FCRounded = Math.round(freinConverted * 10) / 10; //the 100 determines the numbers displayed after the decimal
  return FCRounded
}

const ctof = function(celsInput) {
  const celsiusConv = ((celsInput * 9/5) + 32);
  const CCRounded = Math.round(celsiusConv * 10) / 10;
  return CCRounded;
}

console.log(ctof(32))
console.log(ftoc(47))
module.exports = {
  ftoc,
  ctof
}
