var arr = [1,2,4,6,1,2,8,22,34,65,78, 12];


function Node(value, left, right) {
	this.value = value;
	this.left = left;
	this.right = right;
}

/**
 * Build the BSP tree
 * @param  {Array} arr  - array of value to be built with
 * @return {Node}       - root node of built tree
 */
function buildTree(arr) {
	if(!arr || !arr.length) {
		// check empty, check array length
		return -1;
	}
	if(!Array.isArray(arr)) {
		return -1;
	}

	// 1. build root node from 1st element
	var root = new Node(arr[0]);
	if(arr.length === 1) {
		return root;
	}
	// 2. insert 2nd element
	for(var i = 1; i < arr.length; i++) {
		var value = arr[i];
		insertNode(value, root);
	}

	return root;
}
/**
 * Insert node to bsp tree
 * @param  {number} value    - value to be inserted
 * @param  {Node} rootNode   - Root node of existing tree
 * @return {n/a}          
 */
function insertNode(value, rootNode) {
	if(!rootNode) {
		return void 0;
	}
	if( value <= rootNode.value) {
		if(rootNode.left) {
			insertNode(value, rootNode.left);
		} else {
			// attach left
			var newNode = new Node(value);
			rootNode.left = newNode;
		}
	} else {
		if(rootNode.right) {
			insertNode(value, rootNode.right);
		} else {
			// attach right
			rootNode.right = new Node(value);
		}
	}

	// Start from the root
	// if value < root.value, 
	// 	 if left node exist, 
	// 	   insertNode(value, rootNode.left)
	// 	 else 
	// 	   attach to the left of rootNode
	// else
	//   right node exist
	//     insertNode(value, rootNode.right) 
	//   else 
	//     attach to the right of rootNode
	//   
}

var tree = buildTree(arr)


/**
 * traverse BSP Tree, print value small to large
 * @param  {Node} root - root node of the BSP tree
 * @return {n/a}      
 */
function traverseTree(root) {
	if(root.left) {
		traverseTree(root.left)
	} else {
		console.log(root.value);
	}
	if(root.right) {
		traverseTree(root.right);
	}
}



/////////////////////////   Below is wrapped above function in one Obj   //////
/**
 * Build and traverse BSP tree wrapped in one object
 * @param {Array} arr - Array of value to build the tree
 */
function Tree(arr) {
	var valueArray = arr;
	var rootNode;
	function Node(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
	function buildTree() {
		if(!arr || !arr.length) {
			// check empty, check array length
			return -1;
		}
		if(!Array.isArray(arr)) {
			return -1;
		}

		// 1. build root node from 1st element
		var root = new Node(arr[0]);
		if(arr.length === 1) {
			return root;
		}
		// 2. insert 2nd element
		for(var i = 1; i < arr.length; i++) {
			var value = arr[i];
			insertNode(value, root);
		}
		rootNode = root;
		return this;
	}
	function insertNode(value, rootNode) {
		if(!rootNode) {
			return void 0;
		}
		if( value <= rootNode.value) {
			if(rootNode.left) {
				insertNode(value, rootNode.left);
			} else {
				// attach left
				var newNode = new Node(value);
				rootNode.left = newNode;
			}
		} else {
			if(rootNode.right) {
				insertNode(value, rootNode.right);
			} else {
				// attach right
				rootNode.right = new Node(value);
			}
		} 
	}
	function traverseTree(rNode) {
		var localRootNode;
		if(rNode) {
			localRootNode = rNode;
		} else {
			localRootNode = rootNode;
		}
		if(localRootNode.left) {
			traverseTree(localRootNode.left)
		} else {
			console.log(localRootNode.value);
		}
		if(localRootNode.right) {
			traverseTree(localRootNode.right);
		}
		return this;
	}

	return {
		Node: Node, 
		BuildTree: buildTree,
		TraverseTree: traverseTree, 
		GetOriginalArray: function(){return arr}
	}
}

var myTree = new Tree(arr);

myTree.BuildTree().TraverseTree();

