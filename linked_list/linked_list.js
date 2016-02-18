

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


Node.prototype.deleteNode = function(value) {
	var node = this;

	if(node.value === value) {
		node = node.next;
		return node;
	}

	while(node.next) {
		if (node.next.value === value) {
			// node.next is the node to delete
			node.next = node.next.next;
			// cannot remove itself
			return;
		}
		node = node.next;
	}
	return node;
}

var node = new Node(33);
node.appendToTail(22);
node.appendToTail(11);
node.deleteNode(33);


console.log(node);