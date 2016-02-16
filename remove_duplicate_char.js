function removeDuplicateChar(str) {
	var length = str.length;
	var charSet = {};
	var resultSet = [];
	for(var i = 0; i < length; i++) {
		var letter = str[i];
		if(charSet[letter]) {
			charSet[letter] = true; 
			// useless
		} else {
			resultSet.push(letter);
			charSet[letter] = true;
		}
	}
	return resultSet.join('');
}

var inputString = "abcdefgghhiijjkk888";
console.log(removeDuplicateChar(inputString));