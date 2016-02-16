// compare binary string with hex string
function binHexCompare(binString, hexString) {
	var n1 = convertToBase(binString, 2);
	var n2 = convertToBase(hexString, 16);

	if(n1 > n2) {
		return 1;
	}
	if (n1 < n2) {
		return -1;
	}
	return 0;
}

function convertToBase(numString, base){
	if (base <2 || base > 16) {
		// beyond the capability of this function
		return -1;
	}
	//'1    0    1    0     1     0     1'
	//6     5    4    3     2     1   pow(base, 0)
	var total = 0;
	for(var i = numString.length - 1; i >=0; i--) {
		var letter = numString.charAt(i);
		var number = parseInt(letter, base);
		total += Math.pow(base, numString.length -1 - i ) * number
	}	

	return total;
}
/* 
// test sub function
var str = '1101';
var base = 2;
var result = convertToBase(str, base);
console.log(result);
*/
var comResult = binHexCompare('1101', 'd');
console.log(comResult);




