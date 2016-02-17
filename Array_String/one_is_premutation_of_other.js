/*
	1.3 Given two strings, write a method to decide if 
	one is a permutation of the other.
*/

// it is a permutation, not permutations

// ask if case sensitive
// asi if white space matters


var a = 'abc';
var b = 'cba'; // 'baab'?


// possible solution 1, sort and compare equal
function isPermutation(a, b) {
	if (typeof a !== 'string' || typeof b !== 'string') {
		return false;
	}
	if(a.length === 0 || b.length === 0) {
		return false; 
	}

	var sortedA = a.split('').sort().join('');
	var sortedB = b.split('').sort().join('');
	if(sortedA === sortedB) {
		return true;
	} else {
		return false; 
	}

}

// possible solution 2, compare length, and count
var a = 'abcde';
var b = 'abcde';
var result = isPermutation(a, b);
console.log(result)




