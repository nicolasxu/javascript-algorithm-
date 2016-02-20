/*

	Given a circular linked list, implement an algorithm which returns the node at
	the beginning of the loop.
	DEFINITION
	Circular linked list: A (corrupt) linked list in which a node's next pointer points
	to an earlier node, so as to make a loop in the linked list.
	EXAMPLE
	Input: A - > B - > C - > D - > E - > C [the same C as earlier]
	Output: C
*/


function Node(value) {
	this.value = value;
	this.next = null;
}

Node.prototype.appendToTail = function (value) {
	if(typeof value === 'number') {
		var endNode = new Node(value);
		var n = this;
		while(n.next) {
			n = n.next;
		}
		n.next = endNode;
		return endNode;
	}

	if(value.constructor.toString().indexOf('Node') > 0) {
		// probably a node object
		var endNode = value; 
		var n = this;
		while(n.next) {
			n = n.next;
		}
		n.next = endNode;
		return endNode;
	}

}

Node.prototype.print = function() {
	// print list
	var pointerNode = this;
	while(pointerNode) {
		console.log(pointerNode.value);
		pointerNode = pointerNode.next;
	}
}


Node.prototype.toArray = function () {
	// convert linked list to array
	// head is at index 0
	var pointer = this; // at head position

	var result = [];
	while(pointer) {
		result.push(pointer.value);
		pointer = pointer.next;
	}
	return result;
}

Node.prototype.getCircular = function () {
	var pointer = this;
	var set = [];
	while(pointer) {
		// 1. find duplicate in set
		for(var i = 0; i < set.length; i++) {
			if(set[i] === pointer){
				return pointer;
			}
		}
		set.push(pointer);
		// 2. push into set
		pointer = pointer.next;
	}
}


// build list
var node = new Node(33);
var node22 = node.appendToTail(22);
node.appendToTail(11);
node.appendToTail(0);
node.appendToTail(node22);

var circularNode = node.getCircular();
console.log(circularNode.value);
// Do not print or appendToTail of circular list, because it doesn't know
// where is the end. 
// node.appendToTail(node2);
// node.print();


