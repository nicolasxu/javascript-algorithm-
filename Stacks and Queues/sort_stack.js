/*

	Write a program to sort a stack in ascending order (with biggest items on top).
	You may use at most one additional stack to hold items, but you may not copy
	the elements into any other data structure (such as an array). The stack supports
	the following operations: push, pop, peek, and isEmpty.


 */

// strach pad
var s1 = [];
s1.push(4);
s1.push(1);
s1.push(8);
s1.push(9);
s1.push(488);
s1.push(9);


function sortStack(s1) {
	var bufferStack = [];
	while(s1.length > 0) {
		var temp = s1.pop();
		while(bufferStack.length > 0 && bufferStack[bufferStack.length -1] > temp) {
			s1.push(bufferStack.pop());
		}
		bufferStack.push(temp);
	}
	return bufferStack;
}

var result = sortStack(s1);
console.log(result);
console.log("original stack: " + s1);


/*  // Java Solution

public static Stack<Integer> sort(Stack<Integer> s) {
	Stack<Integer> r = new Stack<Integer>();
	while (!s.isEmpty()) {
		int tmp = s.pop(); // Step 1
		while (!r.isEmpty() && r.peek() > tmp) { // Step 2
			s.push(r.pop());
		}
		r.push(tmp); // Step 3
	}
	return r;
}

*/