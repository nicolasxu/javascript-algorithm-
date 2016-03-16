/*

A non-empty zero-indexed array A consisting of N integers is given. The array 
contains an odd number of elements, and each element of the array can be 
paired with another element that has the same value, except for one element 
that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9  A[3] = 3  
  A[4] = 9
  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

int solution(int A[], int N);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  
  A[1] = 3  
  A[2] = 9
  A[3] = 3  
  A[4] = 9  


the function should return 7, as explained in the example above.

Assume that:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
 */


/* this solution will result in timeout error for larger case

function solution(A) {
	if(A.length === 1) {
		return A[0];
	}
	var i = 0;
	while(A.length > 1) {
		var gap = i % 2 === 0? 2: 1;
		if(A[0] === A[0+ gap]) {
			if(gap === 2) {
				A.splice(0, 1);
				A.splice(1, 1);
			} else {
				A.splice(0, 1);
				A.splice(0, 1);
			}
			console.log(A);
		}
		i++;
	}

	return A[0];
}
*/
/* wrong solution
function solution(A) {
	if(A.length === 1) {
		return A[0];
	}
	
	var l1 = A.pop();
	var l2 = A.pop();
	var l3 = A.pop();
	return l2;
	
}
*/
/* wrong answer, 22% correct for the cases
function solution(A) {

	var remainder = A.length % 4;
	if(remainder === 1) {
		// 1
		return A[A.length - 1]; // return the last one
	} else {
		// must 3
		return A[A.length - 2]  // return the 2nd last one
	}
}
*/
// below is correct one
function solution(A) {

	A = A.sort();
	for(var i =0; i < A.length; i=i+2) {
		if(A[i] !== A[i+1]) {
			return A[i];
		}
	}
	return A[A.length -1];
}


var inputArr = [9, 3, 9, 3, 9, 7, 9];
var result = solution(inputArr);

console.log(result);