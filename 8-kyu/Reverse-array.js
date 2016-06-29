//Convert number to reversed array of digits (8 kyu)

function digitize(n) {
  return n.toString().split("").reverse().map(function(a){return +a;});
}

//Alternative syntax using arrow notation

const digitize=n=>n.toString().split("").reverse().map(a=>+a);

//note 'const' instead of var --> var that can't be changed later.