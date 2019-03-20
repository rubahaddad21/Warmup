 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	var number;
 	number=10*Math.Round(num/10);
 	
 	return number;	
 }

 




