/*


A prime is a positive integer X that has exactly two 
distinct divisors: 1 and X. The first few prime 
integers are 2, 3, 5, 7, 11 and 13.

A semiprime is a natural number that is the product
of two (not necessarily distinct) prime numbers. 
The first few semiprimes are 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.

You are given two non-empty zero-indexed arrays P 
and Q, each consisting of M integers. These arrays 
represent queries about the number of semiprimes 
within specified ranges.

Query K requires you to find the number of semiprimes 
within the range (P[K], Q[K]), where 1 ≤ P[K] ≤ Q[K] ≤ N.

For example, consider an integer N = 26 and arrays P, Q such that:

    P[0] = 1    Q[0] = 26
    P[1] = 4    Q[1] = 10
    P[2] = 16   Q[2] = 20
The number of semiprimes within each of these ranges is as follows:

(1, 26) is 10,
(4, 10) is 4,
(16, 20) is 0.
Write a function:

function solution(N, P, Q);

that, given an integer N and two non-empty zero-indexed 
arrays P and Q consisting of M integers, returns an 
array consisting of M elements specifying the consecutive 
answers to all the queries.

For example, given an integer N = 26 and arrays P, Q such that:

    P[0] = 1    Q[0] = 26
    P[1] = 4    Q[1] = 10
    P[2] = 16   Q[2] = 20
the function should return the values [10, 4, 0], as explained above.

Assume that:

N is an integer within the range [1..50,000];
M is an integer within the range [1..30,000];
each element of arrays P, Q is an integer within the range [1..N];
P[i] ≤ Q[i].
Complexity:

expected worst-case time complexity is O(N*log(log(N))+M);
expected worst-case space complexity is O(N+M), beyond input 
storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
 */



// 66%, algorithm is correct, but failed 3 performance cases
function solution(N, P, Q) {
	
	var sieveResult = sieve(N);
	// console.log(sieveResult);
	var results = [];
	for(var i = 0; i < P.length; i++) {

		var count = 0;
		for(var j = P[i]; j <=Q[i]; j++) {
			if(sieveResult[j] > 0) {
				var factor = j / sieveResult[j];
				if(sieveResult[factor] === 0) {
					count++;
				}
			}
		}
		results.push(count);
	}
	return results;
}

/*
def sieve(n):
	sieve = [True] * (n + 1)
	sieve[0] = sieve[1] = False
	i=2
	while (i * i <= n):
		if (sieve[i]):
			k=i * i
			while (k <= n):
				sieve[k] = False
				k += i
	  i += 1
return sieve


 */

function sieve(N) {
	var sieve = {};
	for(var i = 0; i < N + 1; i++) {
		// init value [0, N]
		sieve[i] = 0;
	}
	//sieve[0] = sieve[1] = false; // prime number
	var i = 2;
	while(i * i <=N) {
		if(!sieve[i]) {

			var k = i * i;
			// starts from i*i
			while(k <=N) {
				sieve[k] = i;
				//console.log(N/i);
				k +=i;
			}
		}
		i +=1;
	}
	return sieve;
}


var inputP = [1,  4,  16];
var inputQ = [26, 10, 20];
var inputN = 26;

var result = solution(inputN, inputP, inputQ);

console.log("result is: " + result);
