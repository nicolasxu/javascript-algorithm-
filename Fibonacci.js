
function fibonacci(n) {
	var fibo = [0, 1];

	if (n <= 2) {
		return 1;
	}

	for (var i = 2; i <=n; i++) {
		fibo[i] = fibo[i-1] + fibo[i - 2];
	}

	return fibo[n];

}

console.log(fibonacci(14));

function fibo_resursive(n) {
	if (n === 0) {
		return 0;
	}
	if( n === 1) {
		return 1;
	}
	return fibo_resursive(n-1) + fibo_resursive(n -2);

}



console.log(fibonacci(14));
