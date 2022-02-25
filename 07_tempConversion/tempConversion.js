const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) *  0.555;
  cTemp.toFixed(1);
  return cTemp;
};

const ctof = function(cTemp) {
  let fTemp = cTemp * 0.555 + 32;
  fTemp.toFixed(1);
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
