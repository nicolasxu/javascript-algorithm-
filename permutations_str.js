function permutations(str){
  if (str.length === 2) {
    return [str, str.split('').reverse().join('')];
  }
  var finalResult = [];
  var letters = str.split('');
  for(var i = 0; i < letters.length; i++) {
    letters[i];
    var result = permutations(str.substring(0, i) + str.substring(i + 1) );
    console.log(result);
    for (var ii = 0; ii < result.length; ii++) {
      result[ii] = letters[i] +result[ii];
    }
    finalResult = finalResult.concat(result);
  }
  return finalResult;

}


console.log(permutations("abcefg"));
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]