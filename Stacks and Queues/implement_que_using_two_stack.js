/*

	Implement a MyQueue class which implements a queue using two stacks

 */

function MyQue() {
	var s1 = []; // Using Javascript Array for stack
	var s2 = []; 

	function enQue(value) {
		while(s2.length > 0) {
			s1.push(s2.pop());
		}
		s1.push(value);
	}

	function deQue() {
		
		while(s1.length > 0) {
			s2.push(s1.pop());
		}
		return s2.pop();

	}
	return {
		enQue: enQue,
		deQue: deQue
	}
}


var myQ = new MyQue();
myQ.enQue(1);
myQ.enQue(2);
myQ.enQue(3);

console.log(myQ.deQue());
console.log(myQ.deQue());
myQ.enQue(4);
console.log(myQ.deQue());
console.log(myQ.deQue());
