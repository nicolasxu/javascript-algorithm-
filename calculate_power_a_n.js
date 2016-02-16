

//http://stackoverflow.com/questions/20923780/how-to-explain-this-algorithm-for-calculating-the-power-of-a-number


function power( x,  n) {
    if (n === 1) {
    	return 1;
    }
    else if (n % 2 === 1) {
    	return x * power(x, n - 1);
    }
    else {
        var b = power(x, Math.floor(n / 2));
        return b * b;
    }
}

console.log(power(4, 4));
/*
function power( a, n )
    if (n = 0) 
        return(1)

    x = power(a,n/2)

    if (n is even) 
        return(x*x)
    else 
        return(a*x*x)

*/