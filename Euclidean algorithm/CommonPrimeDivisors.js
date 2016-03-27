/*


A prime is a positive integer X that has exactly two distinct 
divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.

A prime D is called a prime divisor of a positive integer P if 
there exists a positive integer K such that D * K = P. For 
example, 2 and 5 are prime divisors of 20.

You are given two positive integers N and M. The goal is to 
check whether the sets of prime divisors of integers N and 
M are exactly the same.

For example, given:

N = 15 and M = 75, the prime divisors are the same: {3, 5};
N = 10 and M = 30, the prime divisors aren't the same: {2, 5} 
is not equal to {2, 3, 5};
N = 9 and M = 5, the prime divisors aren't the same: {3} is 
not equal to {5}.
Write a function:

function solution(A, B);

that, given two non-empty zero-indexed arrays A and B of Z integers, 
returns the number of positions K for which the prime divisors 
of A[K] and B[K] are exactly the same.

For example, given:

    A[0] = 15   B[0] = 75
    A[1] = 10   B[1] = 30
    A[2] = 3    B[2] = 5
the function should return 1, because only one pair (15, 75) 
has the same set of prime divisors.

Assume that:

Z is an integer within the range [1..6,000];
each element of arrays A, B is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(Z*log(max(A)+max(B))2);
expected worst-case space complexity is O(1), beyond input storage 
(not counting the storage required for input arguments).
Elements of input arrays can be modified.




 */

// 92%, algorithm is correct, but failed 1 performance case
function solution(A, B) {

	var counter = 0;
	for(var i = 0; i < A.length; i++) {
		var valueA = A[i];
		var valueB = B[i];

		var pmA = primeFactors(valueA);
		var pmB = primeFactors(valueB);

		for(var key in pmA) {
			pmB[key] = typeof pmB[key] ==='undefined'? 0: pmB[key] + 1;
		}
		var pmBCount = 0;
		for(var key in pmB) {
			if(pmB[key] === 2) {
				pmBCount++;
			}
		}
		if(pmBCount === Object.keys(pmB).length) {
			counter++;
		}

	}
	return counter;

}
/*
// Greatest Common Divisor
def gcd(a, b):
	if a % b == 0:
 		return b
 	else:
 		return gcd(b, a % b)
*/
function findGcd(a, b) {
	if( a % b === 0) {
		return b;
	} else {
		return findGcd(b, a%b);
	}
}

/*
// A function to print all prime factors of a given number n
void primeFactors(int n)
{
    // Print the number of 2s that divide n
    while (n%2 == 0)
    {
        printf("%d ", 2);
        n = n/2;
    }
 
    // n must be odd at this point.  So we can skip one element (Note i = i +2)
    for (int i = 3; i <= sqrt(n); i = i+2)
    {
        // While i divides n, print i and divide n
        while (n%i == 0)
        {
            printf("%d ", i);
            n = n/i;
        }
    }
 
    // This condition is to handle the case whien n is a prime number
    // greater than 2
    if (n > 2)
        printf ("%d ", n);
}
*/

function primeFactors(N) {
	var result = {};
	while (N % 2 === 0) {
		result[2] = 1;
		N = N / 2;
	}
	var i = 3;
	while(i * i <= N) {
		while( N % i === 0) {
			result[i] = 1;
			N = N / i;
		}
		i = i + 2;
	}
	if( N > 2) {
		result[N] = 1;
	}
	return result;
}

var inputA = [15, 10, 3];
var inputB = [75, 30, 5];

var result = solution(inputA, inputB);

console.log("result is: " + result);