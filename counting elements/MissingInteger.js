/*
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of 
N integers, returns the minimal positive integer 
(greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the 
range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), 
beyond input storage (not counting the storage 
required for input arguments).
Elements of input arrays can be modified.

 */

// to successfully complete this, you need to list
// all other possibilities that is not in the example. 
// 
function solution(A) {
	// missing min, > 0, value
	var length = A.length;
	var sorted = A.sort(compareFunc);
	var missingVal = 1;
	console.log(sorted);
	for(var i = 0; i < length; i++) {
		var curVal = sorted[i];

		if(curVal >0) {
			console.log("curVal: "+curVal);
			if(curVal === missingVal){
				missingVal++;
				console.log(missingVal);
			}
		}
	}
	return missingVal;
}

function compareFunc(a, b) {
	var a = parseInt(a);
	var b = parseInt(b);
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

var inputA = [4, 6, 2, -1];
var inputB = [-100];
var inputC = [-100, 100];
var inputD = [-100, -10, -5, 0, 1,2 ];
var inputE = [-100, 0];
var inputF = [100, 100, 102, 200];
var inputG = [-100, -10, 1,2,4, 100];
var inputH = [4, 5, 6, 2];
var inputI = [0,1,2,3,4,5,6,7,8,9,10, 12,13,14];
var result = solution(inputI);

console.log("result: " + result);