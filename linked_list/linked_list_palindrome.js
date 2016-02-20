/*
2.7 Implement a function to check if a linked list is a palindrome.
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

Node.prototype.isPalindrome = function () {
	var head = this;
	var arr = head.toArray();
	var length = arr.length;
	for(var i = 0; i < Math.floor(arr.length / 2) ; i++) {
		if(arr[i] !== arr[length - i -1]) {
			return false; 
		}
	}
	return true; 
}

// build list
var node = new Node(33);
node.appendToTail(22);
node.appendToTail(33);
var comResult = node.isPalindrome();
console.log(comResult);










