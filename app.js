// Commission Calculator
const propertyAddress = document.getElementsByName('property-address'); 
const price= document.getElementById("purchase-price");
const commRate = document.getElementById("commission-rate");
// Commission Button
const commBtn = document.getElementById("commission-btn"); //Commission Button
// Commission Results 
const commResults_address = document.getElementById("commission-address--hidden");
const commResults = document.getElementById("commission-results--hidden");

//Loan Calculator
const loanAmount = document.getElementById('loan-amount');
const apr = document.getElementById('apr');
const loanRepayment = document.getElementById('repayment-period');
//Loan Button 
const loanBtn = document.getElementById('loan-btn');
//Loan Results 
const monthlyPayment = document.getElementById('loan-monthly-payment');
const loanTotal = document.getElementById('loan-total');
const loanInterest = document.getElementById('loan-total-interest');




//Commission Calculator click event with callback function

const calculateComm = () => {
    let pending, percent, value, displayAmount;
    percent = commRate.value;
    pending = price.value;

    displayAmount = percent * pending;

    commResults.innerHTML = '$' + displayAmount.toLocaleString(undefined, { maximumFractionDigits: 2 });
    // commResults_address.innerHTML = propertyAddress.value;
}
// click event for commission calculator
commBtn.addEventListener('click', calculateComm, false);
// need to differentiate between when enter is 
//clicked in comm Container vs loan container 
document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        calculateComm();
    } 

}, false);


loanBtn.addEventListener('click', calculateLoan = () => {
    let principal, interest, payments, compute, monthly;
    
    principal = parseFloat(loanAmount.value);    
    interest = parseFloat(apr.value) / 100 / 12;
    payments = parseFloat(loanRepayment.value) * 12;
    
    compute = Math.pow(1 + interest, payments);    
    monthly = (principal *compute* interest) / (compute - 1);
    
        
    monthlyPayment.innerHTML = monthly.toLocaleString(undefined, { maximumFractionDigits: 2 });
    
    loanTotal.innerHTML = (monthly * payments) .toLocaleString(undefined, { maximumFractionDigits: 2 });
    
    loanInterest.innerHTML = ((monthly * payments) - principal).toLocaleString(undefined, { maximumFractionDigits: 2 }); 
}, false);
