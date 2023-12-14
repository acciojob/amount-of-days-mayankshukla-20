//your JS code here. If required.
function daysOfAYear(n){
	if(n % 4 === 0){
		if(n % 100 === 0 && n % 400 === 0){
			return 366;
		}
		return 365;
	}
	else{
		return 365;
	}
}