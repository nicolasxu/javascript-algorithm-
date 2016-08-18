function permutations(str){
  if (str.length === 2) {
    return [str, str.split('').reverse().join('')];
  }
  var finalResult = [];
  var letters = str.split('');
  for(var i = 0; i < letters.length; i++) {
    console.log('letter i:' + i + ': ' + letters[i]);
    console.log('str.substring(0, i): ' + str.substring(0, i) );
    console.log('str.substring(i + 1): ' + str.substring(i + 1));
    var result = permutations(str.substring(0, i) + str.substring(i + 1) );
    // str.substr(i) will return the substring from index i (inclusive) to the end
    console.log(result);
    for (var ii = 0; ii < result.length; ii++) {
      result[ii] = letters[i] +result[ii];
    }
    finalResult = finalResult.concat(result);
  }
  return finalResult;

}


console.log(permutations("abcd"));
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]