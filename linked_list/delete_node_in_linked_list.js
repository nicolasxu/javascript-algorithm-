/*

	Implement an algorithm to delete a node in the middle of a singly linked list,
	given only access to that node.
	EXAMPLE
	Input: the node c from the linked list a->b->c->d->e
	Result: nothing is returned, but the new linked list looks like a->b->d->e

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

//node.print();



function deleteThisNode(node) {
	if(typeof node !== 'object') {
		return false; 
	}

	var nextNode = node.next;
	if(nextNode) {
		node.value = nextNode.value;
		node.next = nextNode.next;
		return true;
	}
	return false; 
}

deleteThisNode(toDelete);
console.log("after deletion");
node.print();


/*
Note that this problem cannot be solved if the node to be deleted is the last node in
the linked list. That's ok—your interviewer wants you to point that out, and to discuss
how to handle this case. You could, for example, consider marking the node as dummy.


 */
