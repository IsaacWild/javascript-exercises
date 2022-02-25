const ftoc = function(fTemp) {
  let cTemp = ((fTemp - 32) *  5)/9;
  cTemp = parseFloat(cTemp.toFixed(1));
  return cTemp;
};

const ctof = function(cTemp) {
  let fTemp = (cTemp * (9/5)) + 32;
  fTemp = parseFloat(fTemp.toFixed(1));
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
