// 1. Declare customerName in the global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer in global scope after function call
var bestCustomer;

// 4. Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 5. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 6. Declare a constant for leastFavoriteCustomer
const leastFavoriteCustomer = 'bob';

// 7. Function to unsuccessfully try to change it
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not bob'; // This should throw an error
}
