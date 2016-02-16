function reverseWord(str) {
	// reverse words in a string
	// e.g.: how are you? => you? are how
	
	return str.split(' ').reverse().join(' ');
}

var inputStr = "How are you?";

console.log(reverseWord(inputStr));