/*

A non-empty zero-indexed array A consisting of N integers is given. 
A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a 
slice of array A. The sum of a slice (P, Q) is the total of 
A[P] + A[P+1] + ... + A[Q].

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns 
the maximum sum of any slice of A.

For example, given array A such that:

A[0] = 3  A[1] = 2  A[2] = -6
A[3] = 4  A[4] = 0
the function should return 5 because:

(3, 4) is a slice of A that has sum 4,
(2, 2) is a slice of A that has sum −6,
(0, 1) is a slice of A that has sum 5,
no other slice of A has sum greater than (0, 1).
Assume that:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the 
range [−1,000,000..1,000,000];
the result will be an integer within the range 
[−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), 
beyond input storage (not counting the storage 
required for input arguments).
Elements of input arrays can be modified.




 */



// this is wrong solution
function solution(A) {
	var max_ending = 0;
	var max_slice;
	var maxVal;
	for(var i = 0; i < A.length; i++) {
		if(typeof maxVal === 'undefined') {
			maxVal = A[0];
		} else {
			maxVal = Math.max(A[i], maxVal);
		}
		max_ending = Math.max(max_ending + A[i]);
		console.log(i + " max ending: " + max_ending);
		if(typeof max_slice === 'undefined') {
			max_slice = max_ending;
		} else {
			max_slice = Math.max(max_slice, max_ending);
		}
	}
	return max_slice;
}

//84%, algorithm is correct, but failed 2 performance cases
function solution_(A) {
	var length = A.length;
	var maxTotal;
	for(var i =0; i < length; i++) {
		var total = 0;
		for(var j = i; j < length; j++) {
			
			total = total + A[j];

			if(typeof maxTotal === 'undefined') {

				maxTotal = total;
			} else {
				if(total > maxTotal) {
					maxTotal = total;
				}				
			}

		}
	}
	return maxTotal;
}


var inputA = [3,2,-6,4,0]; // 5
var inputB = [-2, 1]; // 1
var inputC = [-10]; // -10
var result = solution(inputB);

console.log("result is: " + result);





