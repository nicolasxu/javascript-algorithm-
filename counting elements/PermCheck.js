/*

A non-empty zero-indexed array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, 
and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns 1 if array A is a 
permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range 
[1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond 
input storage (not counting the storage required for 
input arguments).
Elements of input arrays can be modified.

*/

// pass the test
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var length = A.length;
    // A should contain 1 to length
    
    // 0. build a set for checking permutation
    var permSet = {}; // build a perm set should look like
    for(var i = 1; i <= length; i++ ) {
    	permSet[i] = 1;
    }

    // 1. check all arry element exist in permSet
    for(i = 0; i < length; i++) {
    	if(!permSet[A[i]]){
    		return 0;
    	}
    	permSet[A[i]]++; // 1 -> 2
    }

    // 2. check all permSet has been visited
    for (var key in permSet) {
    	if(permSet[key] < 2) {
    		return 0;
    	}
    }

    return 1;
}

var inputA = [4,1,2,3];
var inputB = [4,1,3];
var r1 = solution(inputA);
var r2 = solution(inputB);
console.log("result 1: " + r1);
console.log("result 2: " + r2);





