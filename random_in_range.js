
function random(range, min) {
	return Math.random() //  [0, 1)
		* range + min; // exclusive max value
		// * (range +1) + min // incluseive
}

/*
 question: If you have a function that 
 generate random number between 1 to 5 how 
 could u generate random number 1 to 7 
 by using that function?
*/
function rand5() {
	return Math.random() * 4 + 1;
}

function rand7() {
	// random from 1 to 7
	return ((rand5() -1) / 4) * 6 + 1;
}

function rand5_7() {
	// random from 5 to 7
	return (rand5() - 1) /4 * 2 + 5;
}