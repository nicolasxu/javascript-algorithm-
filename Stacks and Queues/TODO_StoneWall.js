/*


var link: https://codility.com/programmers/task/stone_wall/

Solution to this task can be found at our blog.

You are going to build a stone wall. The wall 
should be straight and N meters long, and its 
thickness should be constant; however, it should 
have different heights in different places. The 
height of the wall is specified by a zero-indexed 
array H of N positive integers. H[I] is the height
 of the wall from I to I+1 meters to the right 
 of its left end. In particular, H[0] is the 
 height of the wall's left end and H[N−1] is 
 the height of the wall's right end.

The wall should be built of cuboid stone blocks 
(that is, all sides of such blocks are rectangular). 
Your task is to compute the minimum number of blocks
 needed to build the wall.

Write a function:

function solution(H);

that, given a zero-indexed array H of N positive 
integers specifying the height of the wall, 
returns the minimum number of blocks needed 
to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows 
one possible arrangement of seven blocks.



Assume that:

N is an integer within the range [1..100,000];
each element of array H is an integer 
within the range [1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), 
beyond input storage (not counting the storage 
required for input arguments).
Elements of input arrays can be modified.
 */




/*


JUN
27
Sigma 2012 Codility Programming Certificate Solution
A new Codility Certificate codenamed Τ (Tau) has been posted and awaits you, so it is time to show how the previous one, codenamed Σ (Sigma), can be solved. You can still give it a try, but no certificate will be granted. 
This problem is a variant of a problem known as the rectilinear skyline problem, or Manhattan skyline problem, in which a city skyline is given, with each building contributing a rectangle to the skyline, and the question is: what is the minimum number of buildings required to produce the given skyline? The skyline corresponds to the shape of the wall and the buildings correspond to the stone blocks. 
At first glance, the problems seem different. On the one hand, buildings have to stand on the ground and rectangles corresponding to them can overlap. On the other hand, stone blocks cannot overlap but one block can be placed on top of another. However, as we will see, both problems can be solved using the same method. 
Intuition tells us that by extending each stone block to the ground, we obtain a set of buildings that form the given skyline. The converse observation is less obvious. 
The number of stone blocks (or buildings) is not larger than the number of horizontal edges that are above the ground in the skyline. Simply, for each such edge, we can place a separate building, or stone block, standing on the ground. To use fewer stone blocks, one stone block must be adjacent to several horizontal edges of the skyline. When is this possible? Clearly, if the two horizontal edges are adjacent to the same stone block, they must be of the same height. Moreover, the stone wall between the two edges cannot be lower than the edges. It turns out that these two conditions are sufficient. 


The peak shown in the above figure should be made of a single stone block. But how tall should this stone block be? It turns out that making its lower edge level with the higher of the two neighboring horizontal edges is always a good choice. Using such a greedy strategy, any two horizontal edges of the skyline that satisfy the conditions specified above are adjacent to the same stone block. Applying this greedy strategy to the example data yields the following solution: 


Here is a solution that implements this greedy strategy in Python: 
def stone_wall(H):
    N = len(H)
    stones = 0
    stack = [0] * N
    stack_num = 0
    
    for i in range(N):
        while stack_num > 0 and stack[stack_num - 1] > H[i]:
            stack_num -= 1
        if stack_num > 0 and stack[stack_num - 1] == H[i]:
            pass
        else:
            stones += 1
            stack[stack_num] = H[i]
            stack_num += 1
    return stones
 */



// very hard to understand, I don't understand the algorithm
function solution(H) {
	var stack = [];
	var stoneCount = 0;
	for(var i = 0; i < H.length; i++) {
		while(stack.length > 0 && stack[stack.length -1] > H[i]) {
			stack.pop();
		}

		if(stack.length > 0 && stack[stack.length -1] === H[i]) {
			continue;
		}
		stoneCount++;
		stack.push(H[i]);

	} 
	return stoneCount;
}

var inputA = [8,8,5,7,9,8,7,4,8];
var result = solution(inputA);

console.log(result);

