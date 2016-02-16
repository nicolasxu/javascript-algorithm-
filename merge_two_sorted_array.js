
function mergeSortedArray(arrA, arrB) {
	if(arrA.length === 0) {
		return arrB;
	}
	if(arrB.length === 0) {

		return arrA;
	}
	var mergedArr = [];
	var indexA = 0; // index of array A
	var indexB = 0; // index of array B

	var elemA = arrA[indexA]; // current element of Array A
	var elemB = arrB[indexB]; // current element of Array B

	while(indexA < arrA.length || indexB < arrB.length ) {
		if(elemA <= elemB && indexA < arrA.length) {
			mergedArr.push(elemA);
			indexA++;
			elemA = arrA[indexA];
		} else {
			mergedArr.push(elemB);
			indexB++;
			elemB = arrB[indexB];
		}
	}
	return mergedArr;
}

var arrA = [1, 2, 3, 4, 5, 6];
var arrB = [4, 5, 6, 7, 100];
var result = mergeSortedArray(arrA, arrB);

console.log(result);

