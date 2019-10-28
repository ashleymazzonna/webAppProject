// DOM - Commission Calc 
const propertyAddress = document.getElementsByName('property-address');

const purchasePrice = document.getElementById('purchase-price');

const commissionRate = document.getElementById('commission-rate').value;


const commBtn = document.getElementById('commission-btn');

let commissionResults_address = document.getElementById('commission-address--hidden');
let commissionResults = document.getElementById('commission-results--hidden');

let displayAmount, pending, percent;


function setup() {
    purchasePrice.focus();
}
window.addEventListener('load', setup, false);
// const performCalc = () => {
//     displayAmount = purchasePrice.value * commissionRate.value;
//     commissionResults = displayAmount;

// }
// commBtn.addEventListener('click', performCalc, false);

// commissionResults_address.innerHTML = "";
// commissionResults.innerHTML = "";
