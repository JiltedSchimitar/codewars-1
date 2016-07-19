//Paperboy 2 (7 kyu)

function Route(neighbourhood, numberOfHouses, minutesPer50Houses, deliveryTimeInHours) { 
  this.paperboysNeeded = function () {
  
	  var PeoplePer50Houses = numberOfHouses/50;
	  
	  	var timeConversion = 60 * deliveryTimeInHours; //converts deliveryTimeInHours into minutes
	  	var timeMultiplicator = timeConversion/minutesPer50Houses; //2
	  	var TotalMen = PeoplePer50Houses/timeMultiplicator;
	  	var extraPaperboys = Math.ceil(TotalMen - 2);
	  	
	  	if (extraPaperboys == 1) {
	  		return `${extraPaperboys} paperboy needed for ${neighbourhood}`
	  	}
	  	else if (extraPaperboys > 1) {
	  		return `${extraPaperboys} paperboys needed for ${neighbourhood}`
	  	}
		else {
		  return "You and Stripes can handle the work yourselves"
		}
  }
}