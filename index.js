let commissionsByWeek = [3000, 2300, 400, 902, 345];

let commission_May15 = [300000, 432000, 123000, 356000, 523000, 987500, 567000, 232000, 239000];

let fundsAfterPercent = [];
let totalCommissionPaid = 0;
let numberOfCommissionsPd = 0;

const calcTotals = (arr, percent) => {

    for (let i = 0; i < arr.length; i++) {
        fundsAfterPercent.push(Math.ceil(arr[i] * percent));
    }
        numberOfCommissionsPd = fundsAfterPercent.reduce((total, amount) => total + amount);

    return `Your total sales this week are: ${arr}. Your total commission for each purchase consecutively is: ${fundsAfterPercent}. Total commissions paid by the office are: ${numberOfCommissionsPd}.`;
};

// let purchasePrice = prompt("Enter the total purchase price");
// let commRate = prompt("What is the total commission rate for this sale?");
// let result = purchasePrice * commRate;
// alert("The total commission for this sale is : " + result + " Your commission is: "  + result / 2);
// const findValue = (arr) => {
//     return arr.forEach()
// }

let principal, interest, payments, compute, monthly;

principal = parseFloat(200000)
console.log("principal: ", principal);

interest = parseFloat(2.5) / 100 / 12
console.log("interest: ", interest);

payments = 20 * 12;
console.log(" payments: ", payments);

compute = Math.pow( 1 + interest, payments );
console.log(compute);

monthly = (principal * compute * interest) / (compute - 1);
console.log("Monthly: ", monthly);

console.log(monthly.toLocaleString(undefined, { maximumFractionDigits: 2 }));

console.log((monthly * payments).toLocaleString(undefined, { maximumFractionDigits: 2 }));

console.log( ((monthly * payments) - principal).toLocaleString(undefined, { maximumFractionDigits: 2 })); 