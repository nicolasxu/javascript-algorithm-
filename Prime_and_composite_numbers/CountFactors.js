/*


A positive integer D is a factor of a positive integer N if 
there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies 
the above condition (24 = 6 * 4).

Write a function:

function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, 
because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. 
There are no other factors of 24.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(sqrt(N));
expected worst-case space complexity is O(1).
 */

// 79%, failed 3 performance case
function solution_(N) {
	
	var counter = 0;

	var length = Math.ceil(N/2);
	for(var i = 1; i < length; i++) {
		if( N % i === 0) {
			counter = counter + 2;
		}
	}
	return counter + 1;
}

/*

 def divisors(n):
 	i = 1
 	result = 0
 	while (i * i < n):
 		if (n % i == 0):
 			result += 2
 		i += 1
  if (i * i == n):
 		result += 1
  return result
*/

/*

is solution is O(n).
There is a simple way to improve the above solution. Based on one divisor, we can find
the symmetric divisor. More precisely, if number a is a divisor of n, then n
a
is also a divisor.
One of these two divisors is less than or equal to √
n. (If that were not the case, n would be
a product of two numbers greater than √
n, which is impossible.)


 */


// 100%
function solution(N) {
	var i = 1;
	var counter = 0;
	while(i * i < N) {
		if( N % i === 0) {
			counter +=2;
		}
		i++;
	}
	if(i * i === N) {
		counter++;
	}
	return counter;
}


var inputA = 24; // 8
var result = solution(inputA);

console.log("result is: " + result);