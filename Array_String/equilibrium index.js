/*

This is a demo task. You can read about this task and its solutions in this blog post.

A zero-indexed array A consisting of N integers is given. An equilibrium index of this array is any integer P such that 0 ≤ P < N and the sum of elements of lower indices is equal to the sum of elements of higher indices, i.e. 
A[0] + A[1] + ... + A[P−1] = A[P+1] + ... + A[N−2] + A[N−1].
Sum of zero elements is assumed to be equal to 0. This can happen if P = 0 or if P = N−1.

For example, consider the following array A consisting of N = 8 elements:

  A[0] = -1
  A[1] =  3
  A[2] = -4
  A[3] =  5
  A[4] =  1
  A[5] = -6
  A[6] =  2
  A[7] =  1
P = 1 is an equilibrium index of this array, because:

A[0] = −1 = A[2] + A[3] + A[4] + A[5] + A[6] + A[7]
P = 3 is an equilibrium index of this array, because:

A[0] + A[1] + A[2] = −2 = A[4] + A[5] + A[6] + A[7]
P = 7 is also an equilibrium index, because:

A[0] + A[1] + A[2] + A[3] + A[4] + A[5] + A[6] = 0
and there are no elements with indices greater than 7.

P = 8 is not an equilibrium index, because it does not fulfill the condition 0 ≤ P < N.

Write a function:

function solution(A);
that, given a zero-indexed array A consisting of N integers, returns any of its equilibrium indices. The function should return −1 if no equilibrium index exists.

For example, given array A shown above, the function may return 1, 3 or 7, as explained above.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
Copyright 2009–2016 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */




function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    if (typeof A === 'undefined') {
        return -1;
    }
    if(A.length < 1) {
        return -1;
    }
    
    for(var i = 0; i < A.length; i++){
    // r1 = calculate [0 , i]
    // r2 = calculate (i , length -1]
    
    // if r1 === r2, and i !== length -1, 
    //     return i
    
        var r1 = sumA(A, 0, i -1);
        var r2 = sumA(A, i+1, A.length -1);
        
        if(r1 === r2) {
            if (i !== A.length -1) {
                return i;
            }
        }
    }
    return -1;
}

function sumA(A, leftIndex,  rightIndex ) {
    // left, right inclusive
    if(rightIndex < leftIndex) {
        return 0;
    }
    var sum = 0;
    for(var i = leftIndex; i <= rightIndex; i++) {
        sum = sum + A[i];
    }
    return sum;
}
var input = [-1, 3, -4, 5, 1, -6, 2, 1];
var result = solution(input);
console.log("solution is: " + result);
