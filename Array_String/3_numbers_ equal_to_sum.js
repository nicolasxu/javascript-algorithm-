// a sorted array, e,g. [0, 1, 2, 3, 4, 5, 6]
// if sum of 3 numbers equal to a number, e.g. 8, return 
// true, or return false. 
// e.g.: myFunc([0, 1, 2, 3, 4, 5, 6], 8) => true
// e.g.: myFunc([0, 1, 2, 3, 4, 5, 6], 20) => false 




function findSum(arr, total) {

	if(arr.length < 3) {
		return false; 
	}

	if(typeof total !== 'number') {
		return false; 
	}

	for(var i = 0; i < arr.length; i++) {
		for(var j = i; j < arr.length; j++) {
			for(var k = j; k < arr.length; k++) {
				if(arr[i] + arr[j]+ arr[k] === total) {
					return true; 
				}
			}
		}
	}
	return false; 
}

var inputArr = [0, 1, 2, 3, 4, 5, 6];
var total= 20;
var result = findSum(inputArr, total);

console.log(result);