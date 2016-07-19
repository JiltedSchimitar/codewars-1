//Paperboy (7-kyu)

function cheapestQuote(newspapers) {
	
  	var bundleArray = [40, 20, 10, 5, 1];
  	var numberOfBundles = [];
  
  	for (var x = 0; x < bundleArray.length; x++) {
  		var bundle = Math.floor(newspapers/bundleArray[x]);  //number of times each bundle 'fits' in number of newspapers
  		numberOfBundles.push(bundle);
  		newspapers = newspapers % bundleArray[x];  //remainder to be used for next time iteration of the loop
  		console.log(bundle);
	}
	
	var bundle40 = numberOfBundles[0] * 3.85;
	var bundle20 = numberOfBundles[1] * 1.93;
	var bundle10 = numberOfBundles[2] * 0.97;
	var bundle5 = numberOfBundles[3] * 0.49;
	var bundle1 = numberOfBundles[4] * 0.10;
	
	var totalCost = bundle40 + bundle20 + bundle10 + bundle5 + bundle1;
	
	return Math.round(totalCost * 100) / 100;
}