
/*
	3.1 Describe how you could use a single array to implement three stacks.
*/





/*
We can divide the array in three equal parts and allow the individual stack to grow in
that limited space. Note: we will use the notation"[" to mean inclusive of an end point
and"(" to mean exclusive of an end point.
• For stack 1, we will use [0, n/3).
• For stack 2,we will use [n/3j 2n/3).
• For stack 3, wewill use [2n/3, n).



*/