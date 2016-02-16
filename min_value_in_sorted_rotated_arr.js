/*
Example: A sorted array has been rotated so that the elements might appear in the order 
[3, 4, 5, 6, 7, 1, 2]. 
How would you find the minimum element? You may assume that the array has
all unique elements

*/


// assume: 1. original order is increasing order
// assume: 2. rotate, not shuffle
// orignal [1,2,3,4,5,6,7] => [3,4,5,6,7,1,2]


var input = [4, 5, 6, 7, 1, 2 ,3];

/*
	arr: input array
	from: begin index
	to: end index
 */
function findMin(arr, from, to) {

	// 1. format input
	from = typeof from === 'undefined'? 0: from;
	to   = typeof to   === 'undefined'? arr.length -1: to;

	// 2. exit condiditon: 
	if (to - from <=1) {
		if(arr[to]>=arr[from]) {
			return from;
		} else {
			return to;
		}
	}

	// 3. find mid point
	var midIndex = Math.floor((to - from) / 2 + from);
  
  // 4. recursive
  if(arr[midIndex] < arr[to]) {
  	return findMin(arr, from, midIndex);
  } else {
  	return findMin(arr, midIndex, to);
  }
}

console.log(findMin(input));

/*
Explanation:


However, binary search is very applicable. You know that the array is sorted, but rotated.
So, it must proceed in an increasing order, then reset, and increase again.The minimum
element is the "reset" point.
If you compare the middle and last element (6 and 2), you will know the reset point
must be between those values, since MID > RIGHT. This wouldn't be possible unless
the array "reset" between those values.
If MID were less than RIGHT, then either the reset point is on the left half, or there is no
reset point (the array is truly sorted). Either way, the minimum element could be found
there.
We can continue to apply this approach, dividing the array in half in a manner much like
binary search. We will eventually find the minimum element (or the reset point).


 */

