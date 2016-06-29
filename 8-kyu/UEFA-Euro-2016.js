//UEFAEuro2016 (8 kyu)

    //My initial solution

    function uefaEuro2016(teams, scores){
      //if 1st team score > 2nd team
      if (scores[0] > scores[1]) {
      return "At match " + teams[0] + " - " + teams[1] +", " + teams[0] + " won!";
      }
      //if 2nd team score >1st team
      if (scores[1] > scores[0]) {
      return "At match " + teams[0] + " - " + teams[1] +", " + teams[1] + " won!";
      }
      //else 
      else {
        return "At match " + teams[0] + " - " + teams[1] +", teams played draw.";
      }
    }

    //Improved solution using string templating for efficiency--> 
    //concatenating strings is not efficient, so use back ticks `...` and instead of + signs, 
    //refer to function paramaters with ${parameter}.
    //Everything else that's not inside ${} is a string by default because it's all inside `...`

    function uefaEuro2016(teams, scores){
      //if 1st team score > 2nd team
      if (scores[0] > scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
      }
      //if 2nd team score >1st team
      if (scores[1] > scores[0]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
      }
      //otherwise
      else {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
      }
    }
