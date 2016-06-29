//Format a string of names like 'Bart, Lisa & Maggie' (6 kyu)

function list(names){
  var output = "";
  for (var i = 0; i < names.length; i++) {
        if (i == names.length -2) {
          output += names[i].name + " & ";
         } else {
        console.log(names[i].name);
        output += names[i].name + ", ";
        }
  }
  return output;
}