function isPalindrome(word) {
	// after reverse letters in the word, 
	// the word it is the same. 

	var reversedWord = word.split('').reverse().join('');
	if (reversedWord === word) {
		return true; 
	} else {
		return false;
	}

}

var input = "madam";
// console.log(isPalindrome(input));
console.log(isPalindrome2(input));

function isPalindrome2(word) {
	for(var i = 0; i < word.length / 2; i ++) {
		if( word[i] != word[word.length - i -1]) {
			return false;
		}
	}
	return true;
}