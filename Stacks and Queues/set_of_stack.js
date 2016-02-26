/*

	Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
	Therefore, in real life, we would likely start a new stack when the previous stack
	exceeds some threshold. Implement a data structure SetOf Stacks that mimics
	this. SetOf Stacks should be composed of several stacks and should create a
	new stack once the previous one exceeds capacity. SetOf Stacks. push() and
	SetOf Stacks. pop() should behave identically to a single stack (that is, popO
	should return the same values as it would if there were just a single stack).
	FOLLOW UP
	Implement a function popAt(int index) which performs a pop operation on
	a specific sub-stack.

 */


function SetOfStacks(limit) {
	var Limit = limit;
	var stacks = [];
	var length = 0;
	function push(value) {

		if(length < 1) {
			stacks[0] = [value];
			length++;
			return 1;
		}

		var rowIndex = Math.floor(length / Limit); // e.g.: 199 rowIndex is 1.99 => 1
		var offsetIndex = length % Limit - 1; // e.g. 101 offsetIndex is 0

		if(stacks.length < rowIndex + 1) {
			stacks.push([]);
		}
		stacks[rowIndex].push(value) ;
		length++;
		console.log(stacks);
		return length;
	}
	function pop() {
		// 1. check length
		if(length === 0) {
			return;
		}
		// 1. get rowIndex
		// 2. then pop
		var rowIndex = Math.floor((length -1) / Limit);
		length--;
		return stacks[rowIndex].pop();

	}
	function popAt(index) {
		if(index <0 || index > length - 1) {
			console.log("index is out of range");
			return;
		}

		// 1. find out rowIndex, rowOffset
		var rowIndex = Math.floor(index / Limit); 
		// example:  0, 1, 2, 3, 4 => 0, 
		//           5, 6, 7, 8, 9 => 1, 
		//           10,11,12,13,14 => 2,
		//           15, ...        => 3
		var rowOffset = index % Limit;
		// example: 0 => 0
		// 					4 => 4
		// 					5 => 0
		// 					6 => 1
		// 					...
		var popValue = stacks[rowIndex].splice(rowOffset, 1)[0];
		console.log("popValue: " + popValue);

		// 2. shift the element after this 
		var row = rowIndex;
		while(row < stacks.length - 1) {
			// e.g.: 
			// length 5, row from 2, 3
			stacks[row].push(stacks[row+1].shift());
			row++;
		}
		length--;
		console.log(stacks);

	}
	return {
		push: push,
		pop: pop,
		popAt: popAt
	}
}

var stacks = new SetOfStacks(5);


for(var i = 0; i < 12; i++) {
	stacks.push(i);
}
// for(var i = 0; i < 12; i++) {
// 	console.log(stacks.pop());
// }
// console.log(stacks.pop());

stacks.popAt(3); // index 5
stacks.popAt(10);
stacks.push(100);
console.log(stacks.pop());




