/* 
	Write a method to replace all spaces in a string with'%20'. You may assume that
	the string has sufficient space at the end of the string to hold the additional
	characters, and that you are given the "true" length of the string. 
	(Note: if implementing
	in Java, please use a character array so that you can perform this operation
	in place.)
	EXAMPLE
	Input: "Mr John Smith"
	Output: "Mr%20Dohn%20Smith"
*/

// Method 1, using javascript provided method
// var input = "Mr John Smith   ";
// var output = encodeURIComponent(input.trim());



// Method 2, full manual
/**
 * Encode string by replace ' ' with '%20'
 * @param  {String} str - input string
 * @return {String}     - encoded string
 */
function encodeString (str) {
	if(typeof str !== 'string') {
		return '';
	}
	if(str.length === 0) {
		return '';
	}

	var trimedStrArr = str.trim().split('');
	var result = '';
	var replaceStr = '%20';
	for(var i = 0; i < trimedStrArr.length; i++) {
		// if current char is ' ',
		// replace it with '%20'
		if(trimedStrArr[i] === ' ') {
			result = result + replaceStr;
		} else {
			result = result + trimedStrArr[i];
		}
	}
	return result;
}
var input = "Mr John  Smith   ";
var output = encodeString(input);
console.log(output);
