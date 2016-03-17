/*


Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the 
number of integers within the range [A..B] that 
are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your 
function should return 3, because there are three 
numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Assume that:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).


 */

function solution_(A, B, K) {
	var counter = 0;
	var incrementor = 1;
	for(var i = A; i <=B; i= i+ incrementor) {
		if( i % K === 0) {
			counter++;
			incrementor = K;
		}
	}
	return counter;
}

function solution2(A, B, K) {
	var diff = B - A;
	var temp = Math.floor((B - A) / K);

	if(A % K === 0 && B % K === 0) {
		// 6, 12
		temp = temp + 1;
	}
	if(A % K !==0 &&B % K === 0 ) {
		// 7, 12 => diff 5, result 3
		// 9, 12 => diff 3, result 2
		temp = temp + 1;
	}
		if(A % K === 0 && B % K !== 0) {
		// 6, 13
		temp = temp + 1;
	}

	return temp;
}

function solution(A, B, K) {
	
	var v1 = A / K;
	var v2 = B / K;
	return Math.ceil(v2 - v1);
}



// [11, 14, 2]
var A = 5, B = 11, K = 2;
	// var A = 11, B = 14, K = 2;
	// [11, 345, 17]
	var A = 11, B = 345, K=17;
var result = solution(A, B, K);
console.log("result: " + result);

