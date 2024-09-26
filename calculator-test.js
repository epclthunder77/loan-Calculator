
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:2000,years:10,rate:5})).toEqual("21.21");
});


it("should return a result with 2 decimal places", function() {
  const result = calculateMonthlyPayment({ amount: 2000, years: 10, rate: 5 });

  const numericResult = parseFloat(result); // Convert the result back to a number

  expect(result).toEqual(numericResult.toFixed(2));
});


/// etc
