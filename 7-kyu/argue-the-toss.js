//Argue the toss (7 kyu)

function anArgument(...parameters) { // the ... turns the parameters into an array
  var length = parameters.length;
  var parameters = parameters.map(a=>`"${a}"`); //adds " " around each word
  if (length == 1) { //for 1 parameter, need sentence in singular.
    return `You gave me ${length} argument and it is ${parameters}.`;
  } else {  //plural version for more than one parameter
    return `You gave me ${length} arguments and they are ${parameters.slice(0, -2).concat(parameters.slice(-2).join(" and ")).join(", ")}.`;
                                                        // slices chunk of array from first value to pre-penultimate value, leaving out the last two values.
                                                        //concat then adds the lat 2 values (-1 and -2) to the end but with the word 'and' in between
                                                        // the final .join() adds commas between all of these (but not where the 'and' is because those 2 values have been 'joined' and are now considered one.)
  }
}