//alert('test');
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++); {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}
//console.log('hello');

// freeCodeCamp Recursion lesson - a function that repeats itself by calling itself (the function will run 
// inside of itself )


    function factorialize(num) {
        if (num === 0) { return 1; }
        return num * factorialize(num - 1);
    }

    factorialize(5);
//console.log(factorialize(10));


/************************************** *
 
*A tail call is a function call whose return value is used as the callers return value. In the function above return factorial(n — 1, n * accumulator) is a tail call.
****************************************************/

function factorial(n, accumulator) {
    // break condition - every recursive function MUST have a break condition or it will 
    //result in an infinite loop
    if (n === 0) {
        return accumulator
    }
    return factorial(n - 1, n * accumulator)
}
//console.log(factorial(5, 1));//==>> 120









const loanMonthlyResults = document.getElementById('loan-monthly-payment');
const loanInterestResults = document.getElementById('loan-total-interest');
const loanTotalAmount = document.getElementById('loan-total');
const loanBtn = document.getElementById('loan-btn');




    commissionResults.textContent = Math.ceil(purchasePrice.value * commissionRate.value);


        const calcCommission = () => {

           
            const commissionResults = document.getElementById('commission-results-hidden');
            const commissionRate = document.getElementById('commission-rate');
            const purchasePrice = document.getElementById('purchase-price');
            const commissionBtn = document.getElementById('commission-btn');
            

            commissionBtn.addEventListener('click', function () {
                
            });
            

            }
















/*
    return "Your total funds this week are: " + arr + " Your total commission for each purchase is: " + fundsAfterPercent + ". The total amount paid in commissions this week: " + totalCommissionPaid;
    return `Your total funds this week are: ${arr}. Your total commission for each purchase consecutively is: ${fundsAfterPercent}. Total commissions paid by the office are: ${totalCommissionPaid}` 


console.log(calcTotals(commissionsByWeek, .25)); 


for (let j = 0; j < fundsAfterPercent.length; j++) {
          totalCommissionPaid += fundsAfterPercent[j];*/