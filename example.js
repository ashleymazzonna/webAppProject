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
