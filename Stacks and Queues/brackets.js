/*

A string S consisting of N characters is considered to be 
properly nested if any of the following conditions is true:

- S is empty;
- S has the form "(U)" or "[U]" or "{U}" where U is 
a properly nested string;
- S has the form "VW" where V and W are properly 
nested strings.
For example, the string "{[()()]}" is properly 
nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, 
returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should 
return 1 and given S = "([)()]", the function should 
return 0, as explained above.

Assume that:

N is an integer within the range [0..200,000];
string S consists only of the following 
characters: "(", "{", "[", "]", "}" and/or ")".
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) 
(not counting the storage required for input arguments).


*/

// It is 100% correct
function solution(S) {
	if (S.length === 0) {
		return 1; 
	}
	var closePairs = {};
	
	closePairs[")"] = "(";
	closePairs["]"] ="[";
	closePairs["}"] = "{";

	var symbolStack = [];
	for(var i = 0; i < S.length; i++) {
		var currentChar = S[i]; 
		if ("([{".indexOf(currentChar) > -1) {
			console.log("currentChar: " + currentChar);
			// open symbols
			symbolStack.push(currentChar);
		}
		if(")]}".indexOf(currentChar) > -1) {
			// close symbols
			if(symbolStack[symbolStack.length -1] === closePairs[currentChar]) {
				symbolStack.pop();
			} else {
				symbolStack.push(currentChar);
			}
		}
	}
	if(symbolStack.length > 0 ) {
		return 0;
	} else {
		return 1;
	}

}

var inputS = "{[()()]}";
var inputS2 = "([)()]";

var result = solution(inputS);
console.log("result is: " + result);