//Jaden Casin Strings (7 kyu)

String.prototype.toJadenCase = function () {
  
  var words = this.split(' '); //taking string and making array of words
  var jadenCase = [];
  for (var i = 0; i < words.length; i++) {
     jadenCase.push(words[i][0].toUpperCase() + words[i].substring(1)); //take empty array and add newly capitalized words as individual array items
  }
  return jadenCase.join(' '); // make the array back into a string
};