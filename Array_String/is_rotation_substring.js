/*
	Assume you have a method isSubstring which checks if one word is a
	substring of another. Given two strings, s1 and s2, write code to check if s2 is
	a rotation of s1 using only one call to isSubstring 
	(e.g.,"waterbottle"is a rotation of "erbottlewat").
*/

/*
waterbottle
bottlewater
lewaterbott
12345
51234
45123
34512
23451
12345


 */
/**
 * If s1 is rotation of s2
 * @param  {String}  s1 
 * @param  {String}  s2 
 * @return {Boolean}    
 */
function isRotation(s1, s2) {
	// 1. check validity
	if(typeof s1 !== 'string' || typeof s2 !== 'string' ) {
		return false; 
	}
	// 2. check extreme case
	if(s1.length !== s2.length) {
		return false; 
	}

	// 3. length equal
	// get all possible rotation and check 











}