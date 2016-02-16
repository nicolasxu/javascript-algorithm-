

function greatestCommonDivisor(a, b) {

	if( a < 2 || b < 2) {
		return 1;
	}

	var divisor = 2,
		greatestDivisor = 1;

		while (a >= divisor && b >= divisor) {
			if ( a % divisor === 0 && b % divisor === 0) {
				greatestDivisor = divisor;
			}
			divisor++;
		}
	return greatestDivisor;

}

console.log(greatestCommonDivisor(20, 30));


function greatestCommonDivisor2(a, b){
   if(b == 0)
     return a;
   else 
     return greatestCommonDivisor(b, a%b);
}

console.log(greatestCommonDivisor2(20, 30));
