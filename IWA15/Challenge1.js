const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first= data.lists[0][1]
	



const second = data.lists[1][1]
	


const third = data.lists[2][1]

const result = []

const extractBiggest = () => {
	const FirstArray = first[first.length-1]
	const SecondArray = second[second.length-1]
	const ThirdArray = third[third.length-1]

	if  (FirstArray > SecondArray){
	 return first.pop()
	}

     if  (SecondArray> ThirdArray) {
		return second.pop()
	}
	{
	return third.pop()
	}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)