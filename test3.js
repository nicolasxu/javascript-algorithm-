
function solution(A) {
	var count = 0;
	for(var i = 0; i <A.length; i++) {
		for(var j = i+1; j < A.length; j++) {
			if(A[i] === A[j]) {
				// console.log(A[i] +", " + A[j]);
				count++;
			}
		}
	}



  // return count
  return count;
}


var inputArr = [3,5,6,3,3,5];
var result = solution(inputArr);
console.log('result is: ' + result);