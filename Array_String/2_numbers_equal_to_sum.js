// a sorted array, e,g. [0, 1, 2, 3, 4, 5, 6], 
// if sum of 2 numbers equal to a given number, then return true, 
// else return false
// e.g.: myFunc([0, 1, 2, 3, 4, 5, 6], 8) => true
// e.g.: myFunc([0, 1, 2, 3, 4, 5, 6], 20) => false 


// requirement: using data structure to solve it in O(N)

/* 
  Using a dictionary, key is the value of array item, 
  value is the difference between the value and key. 
  if the balance number exist as key in the dict, then return true
  else loop till the end of dict and return false if no match. 
*/

function findSum(arr, total) {
	// 1. validation
	if(arr.length < 2) {
		return false;
	}
	if (typeof total !== 'number') {
		return false; 
	}

	// 2. build dictionary
	
	var dict = {};

	arr.forEach(function(value, index, arr){
		dict[value] = total - value; 
	});
	// console.log(dict);
	for (var key in dict) {
		var balance = dict[key];
		if(dict[balance] || dict[balance] === 0) {
			if(balance != key) {
				// avoid itself, e.g.: total = 6
				return true; 
			}
			// return true; 
		}
	}
	return false; 
}

var inputArr = [0, 1, 2, 3, 4, 5, 6];
var total = 12;
var result = findSum(inputArr, total);
console.log(result);
