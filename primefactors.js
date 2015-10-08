/**
 * Created by Gilbert on 10/8/2015.
 */

/* exported primeFactors */
/**
 * Finds and returns the largest prime factor of any number
 * @param num  any number
 */
function primeFactors(num) {
  if (num === "") {
    throw new Error("Input is empty.");
  }
  if (num === 0) {
    throw new Error("Input is 0");
  }
  else{
    var i = 2;
    while (num > i) {
    if (num % i === 0) {
      num /= i;
    }
    i++;
    }
    return (i);
  }
}

