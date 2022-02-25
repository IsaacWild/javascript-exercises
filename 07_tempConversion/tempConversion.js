const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) *  0.5555555;
  cTemp = parseFloat(cTemp.toFixed(1));
  return cTemp;
};

const ctof = function(cTemp) {
  let fTemp = cTemp * 0.5555555 + 32;
  fTemp = parseFloat(fTemp.toFixed(1));
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
