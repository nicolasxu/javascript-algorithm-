/*


	You have two numbers represented by a linked list, where each node contains a
	single digit. The digits are stored in reverse order, such that the Ts digit is at the
	head of the list. Write a function that adds the two numbers and returns the sum
	as a linked list.
	EXAMPLE
	Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295.
	Output: 2 -> 1 -> 9.That is, 912.
	FOLLOW UP
	Suppose the digits are stored in forward order. Repeat the above problem.
	EXAMPLE
	Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295.
	Output: 9 -> 1 -> 2.That is, 912.



 */

function Node(value) {
	this.value = value;
	this.next = null;
}

Node.prototype.appendToTail = function (value) {
	var endNode = new Node(value);
	var n = this;
	while(n.next) {
		n = n.next;
	}
	n.next = endNode;
	return endNode;
}

Node.prototype.print = function() {
	// print list
	var pointerNode = this;
	while(pointerNode) {
		console.log(pointerNode.value);
		pointerNode = pointerNode.next;
	}
}

Node.prototype.toNumber = function () {
	// convert linked list to number, head is the left most digit
	
	var pointer = this;
	var result = '';
	while(pointer) {
		result = result + pointer.value;
		pointer = pointer.next;
	}

	return parseInt(result);
}

Node.prototype.fromNumber = function (number) {
	// build linked list from number
	// head is the left most digit
	// e.g.: 639 -> 6-> 3-> 9
	
	// 1. validate input
	if(typeof number !== 'number') {
		return void 0;
	}
	var head = this;
	var numberStr = '' + number;
	for(var i = 0; i < numberStr.length; i++) {
		
		if(i === 0) {
			// head
			head.value = parseInt(numberStr[i]);
		} else {
			// after head
			head.appendToTail(numberStr[i]);
		}
	}
}

// building 1st number
var number1 = new Node(6);
number1.appendToTail(1);
number1.appendToTail(7);
// 6 -> 1 -> 7

// building 2nd number
var number2 = new Node(5);
number2.appendToTail(9);
number2.appendToTail(2);
// 5 -> 9 -> 2


var number = number1.toNumber();
var newNumber = new Node(33); // initial value will be replaced
newNumber.fromNumber(987);
//newNumber.print();

// actual calculation:
var result = number1.toNumber() + number2.toNumber();
var resultNode = new Node(9);
resultNode.fromNumber(result);
resultNode.print(); // 617 + 592 = 1209

