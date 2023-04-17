let Days=8;
const CostRental= 40;
let DiscountVac=20;
let TotalPayment;


if(Days < 7)
{
TotalPayment = (Days*CostRental-DiscountVac)
console.log(('$',TotalPayment))
}
else{
let DiscountVac=50
TotalPayment=(Days*CostRental-DiscountVac)
console.log('$',TotalPayment)
}