/*
	Implement an algorithm to find the kth to last 
	element of a singly linked list.
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
}

Node.prototype.print = function() {
	// print list
	var pointerNode = this;
	while(pointerNode) {
		console.log(pointerNode.value);
		pointerNode = pointerNode.next;
	}
}

// building node
var node = new Node(55);
node.appendToTail(44);
node.appendToTail(33);
node.appendToTail(22);
node.appendToTail(11);
node.appendToTail(0);

node.print();


// return Kth node to the last one
// the last node is 1th


Node.prototype.kthLast = function (kth) {

	// 0. validate input
	if(typeof kth !== 'number') {
		return {};
	}
	if(kth === 0) {
		return {};
	}

	// 1. find the length of the linked list by traversal to the end
	var length = 0;
	var pointer = this;
	while(pointer) {
		length++;
		pointer = pointer.next;
	}

	// 2. find out how many distance need to travel from head
	// length 5, 2, 5 - 2 = 3;
	var travelDistance = length - kth;
	pointer = this;
	var index = 0;
	// 3. travel and return
	
	while(pointer && index < travelDistance ) {
		// 0, 1, 2
		pointer = pointer.next;
		index++;
	}
	return pointer;
}


var result = node.kthLast(3);
console.log(result);




