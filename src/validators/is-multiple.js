import { curry, contains } from "ramda";

const isMultiple = curry((number, value) => {
  var result = userLength * basePrice; //Get result
  if (result % patternLength) {
    //Check if there is a remainder
    var remainder = result % patternLength; //Get remainder
    if (remainder >= patternLength / 2)
      //If the remainder is larger than half of patternLength, then go up to the next mulitple
      result += patternLength - remainder; //Else - subtract the remainder to go down
    else result -= remainder;
  }
  return Math.round(result * 100) / 100;
});

export default isMultiple;
