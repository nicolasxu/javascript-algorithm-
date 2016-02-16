
function reverseString(str) {
	return str.split('').reverse().join('');
}

var string = "How are you doing?";

console.log(reverseString(string));


String.prototype.reverse = function () {
	return this.split('').reverse().join('');
}

console.log('abcd'.reverse());