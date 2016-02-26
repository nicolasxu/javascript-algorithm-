/*
	In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of
	different sizes which can slide onto any tower. The puzzle starts with disks sorted
	in ascending order of size from top to bottom (i.e., each disk sits on top of an
	even larger one). You have the following constraints:
	(1) Only one disk can be moved at a time.
	(2) A disk is slid off the top of one tower onto the next tower.
	(3) A disk can only be placed on top of a larger disk.
	Write a program to move the disks from the first tower to the last using stacks

*/


var tower1 = [];
var tower2 = [];
var tower3 = [];

// tower1.push(4);
// tower1.push(3);
tower1.push(2);
tower1.push(1);

/**
 * Hanoi simulation
 * @param  {Number} diskCount   - Total number disks to move
 * @param  {Array}  origin      - From which tower
 * @param  {Array}  destination - To which tower
 * @param  {Array}  buffer      - Via which buffer
 * @return {n/a}                - n/a
 */
function moveDisk(diskCount, origin, destination, buffer) {

	if(diskCount <= 0) {
		console.log("Hanoi is done!");
		return;
	}


	if(diskCount === 1) {
		var bottomDisk = origin.pop();
		console.log("moving disk " + bottomDisk + " ... ");
		destination.push(bottomDisk);
		return;
	}


	moveDisk(diskCount -1, origin, buffer, destination);

	moveDisk(1, origin, destination, buffer);

	moveDisk(diskCount -1, buffer, destination, origin);
}

moveDisk(tower1.length, tower1, tower3, tower2);

console.log(tower3);









