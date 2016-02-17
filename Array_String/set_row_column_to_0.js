/*
	Write an algorithm such that if an element in an MxN matrix is 0, its entire row
	and column are set to 0.
*/

var arr = [[1,2,3,4, 5], 
					 [1,2,3,0, 5], 
					 [1,2,0,4, 5]]; // 5 x 3

function SetRowColIfZero(arr) {
	function RowColumn(r, c) {
		this.row = r; // row index
		this.column = c; // column index
	}
	/**
	 * Find zero element in an array
	 * @param  {Array} arr - Array M x N
	 * @return {Array}     - Array of RowColumn
	 */
	function findZero(arr) {

		// 1. validate param
		if(!Array.isArray(arr)) {
			return void 0;
		}

		if (arr.length === 0) {
			return void 0;
		}
		var result = [];
		// 2. loop array to find and store 0 elements row clumn
		for(var i = 0; i < arr.length; i++) {
			for(var j = 0; j < arr[i].length; j++) {
				if(arr[i][j] === 0) {
					// assume arr contains all valid integer
					result.push(new RowColumn(i,j));
				}
			}
		}
		return result;
	}
	/**
	 * Set row and column to 0 based
	 * @param {Array} rowColArr - Array of RowColumn
	 */
	function setZero(rowColArr, targetArr) {
		// 1. validate param
		if(!Array.isArray(rowColArr)) {
			return void 0;
		}

		if (rowColArr.length === 0) {
			return void 0;
		}
		// 2. loop through array
		for(var i = 0; i < targetArr.length; i++) {
			for(var j = 0; j < targetArr[i].length; j++) {
				if(shouldSetZero(i,j, rowColArr)) {
					targetArr[i][j] = 0;
				}
			}
		}
	}
	
	/**
	 * check if this row, col cell should be set to 0
	 * @param  {Number} row       - row of the cell to check
	 * @param  {Number} column    - column of the cell to check
	 * @param  {Array} rowColArr  - Array of row col object
	 * @return {Boolean}          - if this cell should be empty
	 */
	function shouldSetZero(row, column, rowColArr) {
		// 1. validate param
		if(!Array.isArray(rowColArr)) {
			return void 0;
		}

		if (rowColArr.length === 0) {
			return void 0;
		}

		var result = false;

		rowColArr.forEach(function(rowCol){
			
			if(row === rowCol.row || column === rowCol.column) {
				
				result = true;
				
			}
		});
		return result; 
	}
	var rowColArr = findZero(arr);
	setZero(rowColArr, arr);
}

SetRowColIfZero(arr);
console.log(arr);


