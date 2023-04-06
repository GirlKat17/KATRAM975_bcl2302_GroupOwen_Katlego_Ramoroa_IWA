const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo ={
	CustomerName :leoName,
	Balance :leoBalance,
	AccessId:'47afb389-8014-4d0b-aff3-e40203d2107f',
	Age : 24,
}

	 AddressLeo ={
		Number :leoNumber,
		Street : leoStreet,
		Postal_Code :leoPostal,
	}
  



const sarah ={
CustomerName : sarahName + sarahSurname,
Age :62,
AccessId :'6b279ae5-5657-4240-80e9-23f6b635f7a8',
Balance : sarahBalance,
}
	AddressSarah = {
		Number : sarahNumber,
		StreetName : sarahStreet,
		postal_Code :sarahPostal,
	}


    console.log(leo, {AddressLeo})
    console.log(sarah, {AddressSarah})

//console.log(leo, leo[address][postal_code])
//console.log(sarah, sarah[address][postal-code])