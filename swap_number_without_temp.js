
function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  a = a + b;
  b = a - b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

swapNumb(2, 3);



function swapNumb_bit(a, b){
  console.log("a: " + a + " and b: " + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("a: " + a + " and b: " + b);
}

swapNumb_bit(2, 3);