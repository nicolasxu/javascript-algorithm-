/*
	Implement an algorithm to determine if a string has all unique characters. What
	if you cannot use additional data structures?
 */

var stringExample = "abcdedfgijk11";
/**
 * If a string contains all unique characters
 * @param  {String} str - Input string to test
 * @return {Boolean}    - true if all char are no duplicate, else false
 */
function allUniqueChar(str) {

	// Thoughts:
	// build a data set. Key is the character, value is the number
	// of occurance of the key.
	var charSet = {};
	// but this way, you are using additional data structure, which
	// violating the constraints. 
	
}

function allUniqueChar2(str) {
	// example: "abcdefghijkk1"
	// pattern: one char will not appear anywhere after its index
	//  appears, return false
	//  if itereated to the end, then return true.
	
	for(var i = 0; i < str.length; i++) {
		var theChar = str.charAt(i);
		var subStrAfterTheChar = str.substring(i+1);
		if(subStrAfterTheChar.indexOf(theChar)> -1) {
			return false; 
		}
	}
	return true; 
}


console.log(allUniqueChar2('abcdefga'));



// java solution:

//character a second time, you can immediately return false.
//The code below implements this algorithm.

public boolean isUniqueChars2(String str) {
  if (str.lengthQ > 256) return false;

  boolean[] char_set = new boolean[256];
for (int 1 = 0; i < str. lengthQ; i++) {
  int val = str.charAt(i);
if (char_set[val]) { // Already found this char in string
  return false;
  }
  char_set[val] = true;
  }
  return true;
}
/*
The time complexity for this code is 0(n), where n is the length of the string. The space
complexity is 0(1).

*/
