/*
	Write code to partition a linked list around a value x, 
	such that all nodes less than
	x come before all nodes greater than or equal to x.

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

// building node
var node = new Node(55);
node.appendToTail(44);
node.appendToTail(33);
var toDelete = node.appendToTail(22);
node.appendToTail(11);
node.appendToTail(0);
// node.print();

Node.prototype.partition = function (value) {
	if(typeof value !=="number") {
		return;
	}

	var pointer = this;
	var pointerPrev = this;
	var head = this;

	// logic:
	// go through the whole list
	//   if node.value less than value, then
	//   detatch this node, and attach before the head
	
	while(pointer) {
		var tempPointer = pointer;
		if(pointer.value < value) {

			if(pointer != head) {
				
				// detech
				pointerPrev.next = pointer.next;
				// attach to head
				pointer.next = head;
				head = pointer; // update head
				tempPointer = pointerPrev;
			}
		}
		pointer = tempPointer; // restore pointer
		pointerPrev = pointer;
		pointer = pointer.next;
	}
	return head;

}

var head = node.partition(33);
console.log("after partition: ");
head.print();
