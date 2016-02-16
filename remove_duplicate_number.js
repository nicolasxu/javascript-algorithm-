
function removeDuplicate(arr) {
	var set = {};
	var resultArr = [];
	for(var i = 0; i < arr.length; i++) {
		var currentNumber = arr[i];
		if (!set[currentNumber]) {
			set[currentNumber] = true;
			resultArr.push(currentNumber);
		}
	}
	return resultArr;
}

var inputArr = [3,3,3,4,5,6,7,7,7,8,8,8];
var resultArr = removeDuplicate(inputArr);
console.log(resultArr);
