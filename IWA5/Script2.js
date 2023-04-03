FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0;
const Locationland='RSA'
let shipping=null;
let currency='R'
let customer='1'

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries =35 * 2
const pens = 5 * NONE_SELECTED;
let Total= shoes + batteries + pens + shirts + toys;


if (Locationland=== 'RSA') { 
		shipping = 400 
		currency = 'R';	
}

if (Locationland==='NAM')
{        
	shipping = 600
    currency ='$';
}
	
// else if (Locationland ==='NK')
// {
// 	currency='$';
// }
// else{
// 		shipping = 800 ;
// }

    

if (Total > 1000 && ( Locationland ==="RSA" || Locationland ==="NAM") ){
   shipping = 0
  if (shipping === 0 && customer !==1) {
	 console.log(FREE_WARNING)
	 if (Locationland ==="RSA"){
		shipping = 400
	 } 
	 if (Locationland ==="NAM"){
		shipping = 600
	 } 
  }}

if
(Locationland === 'NK'  ){
	console.log(BANNED_WARNING);
} 

else 
{ 
console.log('price',currency,Total + shipping)
}

// function calcShipping(){
// 	return 0;
// }