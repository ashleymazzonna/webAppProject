const loanMonthlyResults = document.getElementById('loan-monthly-payment');
const loanInterestResults = document.getElementById('loan-total-interest');
const loanTotalAmount = document.getElementById('loan-total');
const loanBtn = document.getElementById('loan-btn');




    let commResults = document.querySelector('#commission-results-hidden').textContent;
    let commRate = document.querySelector('#commission-rate');
    let purchasePrice = document.querySelector('#purchase-price');
let commBtn = document.querySelector('#commission-btn');


// let commCalc = function(e) {
        
//     }




commBtn.oninput = function (commRate, purchasePrice) {
  commResults = Math.ceil(commRate.target.value * purchasePrice.target.value);
};



