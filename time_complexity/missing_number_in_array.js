/*


A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], 
which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var length  = A.length;
    if(length < 1) {
    	return 1;
    }
    var set = {};
    for(var i = 0; i < length; i++) {
    	set[A[i]] = true; 
    }

    for(var j = 1; j <=length +1;j++) {
    	if(!set[j]) {
    		return j;
    	}
    }
    return 'not found';

}


var inputArr = [2,3,1,5]; // N = 4
var result = solution(inputArr);

console.log("result is: " + result);






