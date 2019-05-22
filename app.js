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



let commissionsByWeek = [3000, 2300, 400, 902, 345];
let commission_May15 = [300000, 432000, 123000, 356000, 523000, 987500, 567000, 232000, 239000];

let fundsAfterPercent = [];
let totalCommissionPaid = 0;  

const calcTotals = (arr, percent) => { 
    
    for (let i = 0; i < arr.length; i++) {
        fundsAfterPercent.push(Math.ceil(arr[i] * percent));
    }
   totalCommissionPaid = fundsAfterPercent.reduce((total, amount) => total + amount);

    return `Your total sales this week are: ${arr}. Your total commission for each purchase consecutively is: ${fundsAfterPercent}. Total commissions paid by the office are: ${totalCommissionPaid}`;
    };

console.log(calcTotals(commission_May15, .025));
console.log(`Total number of commissions paid: ${fundsAfterPercent.length}`);
















/*
    return "Your total funds this week are: " + arr + " Your total commission for each purchase is: " + fundsAfterPercent + ". The total amount paid in commissions this week: " + totalCommissionPaid;
    return `Your total funds this week are: ${arr}. Your total commission for each purchase consecutively is: ${fundsAfterPercent}. Total commissions paid by the office are: ${totalCommissionPaid}` 


console.log(calcTotals(commissionsByWeek, .25)); 


for (let j = 0; j < fundsAfterPercent.length; j++) {
          totalCommissionPaid += fundsAfterPercent[j];*/