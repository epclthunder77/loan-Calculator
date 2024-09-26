// Wait for the DOM to be loaded before setting up the form.
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// Get the current UI values from the form.
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

// Set default values in the form fields and calculate the initial monthly payment.
function setupInitialValues() {
  // Set some default values (e.g., 10000 amount, 10 years, 5% rate)
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 10;
  document.getElementById("loan-rate").value = 5;

  // Get the current UI values and calculate the initial monthly payment
  const uiValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(uiValues);
  updateMonthly(monthlyPayment);  // Update the UI with the calculated value
}

// Get the current values from the UI and update the monthly payment.
function update() {
  const uiValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(uiValues);
  updateMonthly(monthlyPayment);  // Update the UI with the new value
}

// Calculate the monthly payment based on the values provided.
function calculateMonthlyPayment(values) {
  const amount = values.amount;
  const years = values.years;
  const rate = values.rate;

  // Convert the annual rate into a monthly rate
  const monthlyRate = rate / 100 / 12;

  // Total number of payments (months)
  const totalMonths = years * 12;

  // Calculate the monthly payment using the formula
  const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

  // Return the result as a string formatted to 2 decimal places
  return `${monthlyPayment.toFixed(2)}`;
}

// Update the UI to show the calculated monthly payment.
function updateMonthly(monthly) {
  // Set the text content of the element with id "monthly-payment"
  document.getElementById("monthly-payment").textContent = monthly;
}
