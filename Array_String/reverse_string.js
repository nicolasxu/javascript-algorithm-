/*
	Implement a function void reverse(char* str) in C or C++ which reverses a nullterminated
	string.
*/


/**
 * Reverse a string
 * @param  {String} str - Input string to be reversed
 * @return {String}     - Reversed string
 */
function reverseString(str) {
	if(typeof str !== "string") {
		return '';
	}
	if(!str) {
		return '';
	}
	if(str.length <=1) {
		return str;
	}

	return str.split('').reverse().join('');
}

/* test
	console.log(reverseString('a'));
	console.log(reverseString(''));
	console.log(reverseString('abcd'));
*/

/**
 * Reverse string not using default method
 * @param  {String} str - input string
 * @return {String}     - output reversed string
 */
function reverseString2(str) {
	if(typeof str !== "string") {
		return '';
	}

	if(!str) {
		return '';
	}
	if(str.length <=1) {
		return str;
	}
	var result = "";
	for(var i = 0; i < str.length; i++) {
		result = str[i] + result;
	}
	return result;
	
}

console.log(reverseString2('a'));
console.log(reverseString2(''));
console.log(reverseString2('abcd'));
console.log(reverseString2(function(){}));
console.log(reverseString2([]));
// relatively type safe


