/*


You are given a non-empty zero-indexed array A consisting of
N integers.

For each number A[i] such that 0 ≤ i < N, we want to count 
the number of elements of the array that are not the 
divisors of A[i]. We say that these elements are non-divisors.

For example, consider integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
For the following elements:

A[0] = 3, the non-divisors are: 2, 6,
A[1] = 1, the non-divisors are: 3, 2, 3, 6,
A[2] = 2, the non-divisors are: 3, 3, 6,
A[3] = 3, the non-divisors are: 2, 6,
A[4] = 6, there aren't any non-divisors.
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A consisting of N integers, 
returns a sequence of integers representing the amount of non-divisors.

The sequence should be returned as:

a structure Results (in C), or
a vector of integers (in C++), or
a record Results (in Pascal), or
an array of integers (in any other programming language).
For example, given:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
the function should return [2, 4, 3, 2, 0], as explained above.

Assume that:

N is an integer within the range [1..50,000];
each element of array A is an integer within the range [1..2 * N].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage 
(not counting the storage required for input arguments).
Elements of input arrays can be modified.


 */




// 66%, failed 3 performance cases
function solution(A) {
	var maxValue = findMax(A);
	//var seiveResult = seive(maxValue);
	//console.log(seiveResult);
	var result = [];
	for (var i = 0; i < A.length; i++) {
		var currentValue = A[i];
		var count = 0;
		for(var j = 0; j < A.length; j++) {
			if(currentValue % A[j] !== 0) {
				count++;
			}
		}
		//count--;
		result.push(count);

	}
	return result;
}
function findMax(A) {
	var length = A.length;
	var max = A[0];
	for(var i = 0; i < length; i++) {
		max = Math.max(max, A[i]);
	}
	return max;
}

function seive(N) {

	var result = {};
	for(var i = 0; i < N + 1; i++ ) {
		result[i] = 0;
	}

	var j = 2; 
	var k = j * j;
	while(k < N) {
		if(!result[j]) {
			while(k <=N) {
				result[k] = j;
				k = k + j;

			}
		}
		j++;
		k = j * j;
	}
	return result;
}

var inputA = [3,1,2,3,6];
var result = solution(inputA);

console.log("result is: " + result);

