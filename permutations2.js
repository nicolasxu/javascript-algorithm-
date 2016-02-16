
/*
'a' => 'a'
'ab' => 'ab', 'ba'
'abc' => abc, bac, cab, cba, acb, bca
*/

function Permu(str) {
	function insert(str, letter){
		// 'ab', c => ['cab', 'acb', 'abc' ]
		var arr = str.split('');
		var result = [];
		for(var i = 0; i <= str.length; i++) {
			var arr = str.split('');
			arr.splice(i, 0, letter);
			result.push(arr.join(''));
		}
		return result;
	}
	function permutations(str) {
		if(str.length === 1) {
			return [str];
		}

		if(str.length === 2 ) {
			return [str, str.split('').reverse().join('')];
		}

		// recursive..
		// example: abc
		var firstLetter = str.substring(0, 1);

		var previousPermutations = permutations(str.substring(1, str.length));
		
		// ['ab', 'ba']
		var finalPermutions = [];
		for(var i = 0; i < previousPermutations.length; i++) {
			var thisPerm = previousPermutations[i];
			var oneResult = insert(thisPerm, firstLetter);

			finalPermutions = finalPermutions.concat(oneResult);
		}

		return finalPermutions;
	}
	return permutations(str);
}

var result = Permu('abced');
console.log(result);
console.log('Result length: ' + result.length);
