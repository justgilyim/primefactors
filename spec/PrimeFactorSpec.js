/* globals primeFactors */
describe("PrimeFactors", function() {

  var testNum = 600851475143;

  it("should return the largest prime factors of the number", function() {
    expect(primeFactors(testNum)).toEqual(6857);
  });

  var testNum2 = "";

  it("should throw an error when nothing is given", function(){
    expect(function(){primeFactors(testNum2);}).toThrowError("Input is empty.");
  });

  var testNum3 = 0;

  it("should throw an error a non-numeric input is given", function(){
    expect(function(){primeFactors(testNum3);}).toThrowError("Input is 0");
  });
});
