const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ( hourOfDay === 00 && minuteOfDay === 00)
{
    
	const taxAsDecimal = parseInt(tax) /100
   // console.log(taxAsDecimal)

  const startingAfterTax = salary-(salary * taxAsDecimal)
  //console.log(startingAfterTax)

   const balance = startingAfterTax- rent- transport - food 
   // console.log(balance)

	
console.log(balance.toFixed(2))
}

else{
    console.log('undefined')
}
