/*
	Write code to remove duplicates from an unsorted linked list.
	FOLLOW UP
	How would you solve this problem if a temporary buffer is not allowed?
*/


function Node(value) {
	this.value = value;
	this.next = null;
}
Node.prototype.appendToTail = function (value) {
	if (typeof value !== 'number') {
		return;
	}

	var newNode = new Node(value);
	var pointerNode = this;

	while (pointerNode.next) {

		pointerNode = pointerNode.next;
	}
	pointerNode.next = newNode;
	return newNode;
}
Node.prototype.print = function() {
	// print list
	var pointerNode = this;
	while(pointerNode) {
		console.log(pointerNode.value);
		pointerNode = pointerNode.next;
	}
}
Node.prototype.removeDuplicate = function(){
	var pointerNode = this;
	if(typeof pointerNode !== 'object') {
		return;
	}
	if(!pointerNode.next) {
		return 0;
	}

	var prevNode = pointerNode;
	var valueSet = {};
	var counter = 0;
	while(pointerNode){

		// 2.1 find duplicate
		var value = pointerNode.value;
		if(valueSet[value]) {
			// duplicates
			// remove pointerNode
			prevNode.next = pointerNode.next;
			counter++;
		} else {
			// no duplicate
			valueSet[value] = 1;
		}
		prevNode = pointerNode;
		pointerNode = pointerNode.next;
	}
	return counter;
}
Node.prototype.removeDuplicateNoBuffer = function (){
	var pointerNode = this;
	if(typeof pointerNode!== 'object') {
		return;
	}
	if(!pointerNode.next) {
		return 0;
	}

	while(pointerNode) {
		var travelPointer = pointerNode;
		var prevTravelPointer = travelPointer;
		while(travelPointer){
			if(pointerNode.value === travelPointer.value){
				// duplicate
				prevTravelPointer.next = travelPointer.next;
			}
			prevTravelPointer = travelPointer;
			travelPointer = travelPointer.next;
		}

		pointerNode = pointerNode.next;
	}
}

var node = new Node(33);
node.appendToTail(22);
node.appendToTail(22);
node.appendToTail(11);
node.appendToTail(11);
console.log('before deletion: ');
node.print();
console.log('after remove duplicate:');
// node.removeDuplicate();
node.removeDuplicateNoBuffer();
node.print();

