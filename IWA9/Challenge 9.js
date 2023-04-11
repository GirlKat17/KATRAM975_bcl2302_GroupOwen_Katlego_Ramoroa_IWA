const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    foodExp: 51.7501,
    transportExp:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    smallroom: 200,
    largeroo: 300,
    smallapartment: 400,
    largeapartment: 800,
    smallhouse: 1200,
    largehouse: 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913])/100;
// calculating the amount of tax the person is going to pay with the % of o.12

const SalaryTaxed=salary*taxAsDecimal;
const startingAfterTax = salary * 1 - SalaryTaxed;
//console.log(startingAfterTax)

//type is know what which rent is the person paying
const type = size +lodging;
//console.log(type)

const balance = startingAfterTax-(expenses.foodExp+expenses.transportExp+rent.largeapartment)
console.log(balance.toFixed(2))