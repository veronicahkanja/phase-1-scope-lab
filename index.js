// Write your solution in this file!

// Declare in global scope
var customerName = "bob";

// Uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope (no var/let/const → global leak)
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Overwrite the existing global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";  
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "initial customer";

// Attempt to change leastFavoriteCustomer (will throw error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new customer";
}

