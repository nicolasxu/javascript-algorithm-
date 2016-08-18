/*


A non-empty zero-indexed array A consisting of N integers is given. 
Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty 
parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + 
A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the 
first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7 
P = 2, difference = |4 − 9| = 5 
P = 3, difference = |6 − 7| = 1 
P = 4, difference = |10 − 3| = 7 
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, 
returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

*/



// large case will run out of time, 
// this is O(N*N) and will fail large case due to timeout
function solution(A) {

	var length = A.length;
	var min = 'empty';
	for(var p = 1; p < length; p++) {
		// r1 = 0, p-1
		var r1 = calculateSum(A, 0, p -1)
		// r2 = p, length -1
		var r2 = calculateSum(A, p, length -1);

		var abs = Math.abs(r1 - r2);
		if(min === 'empty') {
			min = abs;
		} else {
			if(abs < min) {
				min = abs;
			}
		}
	}
	return min;
}
var leftCache = {};
var rightCache = {};

function calculateSum (A, left, right) {
	if (left === right) {
		return A[left];
	}
	if(left === 0) {
		// find in left cache first
		if(typeof leftCache[right -1] === 'number') {
			var thisResult = leftCache[right -1] + A[right];
			leftCache[right] = thisResult;
			return thisResult;
		}
	}
	if(right === A.length -1) {
		// find in right cache first
		if(typeof rightCache[left -1] === 'number') {
			var thisResult = rightCache[left -1] - A[left];
			rightCache[left] = thisResult;
			return thisResult;
		}
	}
	var sum = 0;
	for(var i = left; i <=right; i++) {
		sum = sum + A[i];
	}

	return sum;

}


var inputArr = [3,1,2,4,3];
var result = solution(inputArr);
console.log("result is: " + result);