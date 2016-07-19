//Mumbling (7 kyu) 

function accum(s) {
	var arrayS = s.split('');
	console.log(arrayS);
	var newArrayS = [];
	var result= "";
	  for (var i = 0; i < arrayS.length; i++) {
	    var multiplyLetters = arrayS[i].charAt(0).toUpperCase() + arrayS[i].toLowerCase().repeat(i);
	    newArrayS.push(multiplyLetters);
	    console.log(multiplyLetters);
	    console.log(newArrayS);
	  }
	newArrayS = newArrayS.join("-");
	return newArrayS;
}