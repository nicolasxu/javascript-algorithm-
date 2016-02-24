/*

	Implement a MyQueue class which implements a queue using two stacks

 */

function MyQue() {
	var s1 = []; // 1, 2, 3, 4, 5, 6
	var s2 = []; // 

	function enQue(value) {
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
console.log(myQ.deQue());
