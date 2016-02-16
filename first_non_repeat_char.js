
function firstNonRepeatChar(str) {
	// find first none repeat char in the string
	var charCount = {};
	var charOrder = {}; // {1: 'e'} 
	var order = 1;
	for(var i = 0; i < str.length; i++) {
		if( charCount[str[i]]) {
			charCount[str[i]]++;
		} else {
			// charCount[str[i]] = 1;
			charCount[str[i]] = 1; 
			charOrder[order] = str[i];
			order++;
		}
	}

	// output the result
	for(var j = 1; j < order; j++) {
		var letter = charOrder[j];
		if(charCount[letter] === 1) {
			return letter;
		}
	}
	return '';
}


var inputStr = "the quick brown fox jumps then quickly blow air";

console.log(firstNonRepeatChar(inputStr));
