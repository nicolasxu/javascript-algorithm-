/* 
	How would you design a stack which, in addition to push and pop, also has a
	function min which returns the minimum element? Push, pop and min should all
	operate in 0(1) time.
*/

// method 1

function Node(value) {
	this.value = value;
	this.min = null;
	this.next = null;
}

function Stack() {
	var nodeList = null;
	function push(nodeValue) {
		console.log("pushing: " + nodeValue);

		if(typeof nodeValue === 'undefined') {
			console.log('return ...');
			return void 0;
		}
		
		if (nodeList === null) {
			// head node
			nodeList = new Node (nodeValue);
			nodeList.min = nodeList.value;

		} else {
			var newNode = new Node(nodeValue);
			// set the min in new node
			if(newNode.value < nodeList.min) {
				newNode.min = newNode.value;
			} else {
				newNode.min = nodeList.min;
			}
			newNode.next = nodeList;
			nodeList = newNode; 
		}
	}
	function pop() {
		var topNode = nodeList;
		if(nodeList) {
			nodeList = nodeList.next;
		}
		return topNode.value;
	}
	function peek() {
		return nodeList;
	}
	function min() {
		if(nodeList) {
			return nodeList.min;
		} else {
			return void 0;
		}
	}
	return {
		push: push,
		pop: pop,
		peek: peek,
		min: min
	}
}

// var stack = new Stack();
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);


// console.log("min is: " + stack.min());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());


// method 2

// no need to store min value in each node,
// store min value seperate list, for the sake of 
// simplisity, I just use the javascript Array



function Stack2() {
	var mins = [];
	var nodeList = null;

	function push(value) {
		if(nodeList) {
			var newNode = new Node(value);
			newNode.next = nodeList;
			nodeList = newNode;
			if(value <= mins[mins.length -1]) {
				mins.push(value);
			}
		} else {
			// head
			var newNode = new Node(value);
			mins.push(value);
			nodeList = newNode;
		}
	}	
	function pop() {
		var newNode = nodeList;
		if(nodeList.next) {
			nodeList = nodeList.next;
		}
		if(newNode.value === mins[mins.length -1]) {
			mins.pop();
		}
		return newNode.value;
	}
	
	function min() {
		return mins[mins.length -1];
	}
	return {
		push: push,
		pop: pop, 
		min: min

	}
}


var stack2 = Stack2() ;
stack2.push(4);
stack2.push(3);
stack2.push(2);
stack2.push(1);
stack2.push(1);
stack2.push(1);


console.log(stack2.pop());
console.log(stack2.pop());
console.log("min is:" + stack2.min())
console.log(stack2.pop());
console.log("min is:" + stack2.min())

console.log(stack2.pop());



