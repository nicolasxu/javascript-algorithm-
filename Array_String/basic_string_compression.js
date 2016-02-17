/*
	Implement a method to perform basic string compression using the counts
	of repeated characters. For example, the string aabcccccaaa would become
	a2blc5a3. If the "compressed" string would not become smaller than the original
	string, your method should return the original string.
*/

// xx => x2
// xxx => x3
// xxxx => x4
// ...

/**
 * Compress string using simple compression 
 * @param  {String} str - Input string
 * @return {String}     - Output compressed string
 */
function compressStr(str) {

	// 1. check input validity
	if(typeof str !== 'string') {
		return '';
	}
	if(str.length <=2) {
		return str;
	}

	// 2. loop compress
	var index = 0; // length: 10, index will be 0 ~ 9
	var result = '';
	while(index < str.length) {
		var currentChar = str[index];
		var counter = 1;
		while( (index < str.length - 1) && (str[index] === str[index+1])) {
			index++;
			counter++;
		}
		if(counter > 1) {
			result = result + currentChar + counter;
		} else {
			result = result + currentChar
		}
		index++;
	}

	// 3. compare length, and return value
	if(result.length >= str.length) {
		return str;
	} else {
		return result;
	}
}	

var input = 'abcdeee'; //"aabcccccaaa";
var result = compressStr(input);
console.log(result);


