// BST definition: tree has 2 leaves only, 
// all left descendant value < current node value, 
// and right descendant value > current node value

  /*
  valid tree
  6
 / \
1   8

  not valid tree
  6
 / \
8   7

not valid tree
  6
 / \
4  7
  /
 2
   */


// one of the common mistakes is you checked the left and right value, but forget
// to check the value of descendent value. 

// method 1
/* valid C code
IsValidBST(root,-infinity,infinity);

bool IsValidBST(BinaryNode node, int MIN, int MAX) 
{
     if(node == null)
         return true;
     if(node.element > MIN 
         && node.element < MAX
         && IsValidBST(node.left,MIN,node.element)
         && IsValidBST(node.right,node.element,MAX))
         return true;
     else 
         return false;
}
 */

// method 2
// do an inorder trverse and build result to an array, the array should
// be in small to big order. If not, it is not a valid BST. 
// 

