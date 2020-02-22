const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //ln(N/N0)/k=t
  let valueCarbon = parseFloat(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  if(sampleActivity == null || valueCarbon<=0 ||valueCarbon>MODERN_ACTIVITY || !valueCarbon || typeof sampleActivity !='string'){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / valueCarbon) / k);
};