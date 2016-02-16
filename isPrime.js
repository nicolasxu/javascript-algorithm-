
var source = "http://www.thatjsdude.com/interview/js1.html#isPrime";

function isPrime(n) {

	var divisor = 3, 
		limit = Math.sqrt(n);
		if( n === 2 || n === 3) {
			return true; 
		}
		if ( n % 2 === 0) {
			return false; 
		}

		while ( divisor <= limit) {
			if ( n % divisor === 0) {
				return false
			} else {
				divisor +=2;
			}
		}

		return true; 
}
var number = 137; 

console.log("isPrime(" + number + "): " + isPrime(number));
