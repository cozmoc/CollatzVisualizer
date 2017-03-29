var Collatz = function(max){
	var result = max;
	if (max == 1){
		return result;
	}else if (max % 2 == 0){
		max /= 2;
	}else if(max % 2 == 1){
		max = 3 * max + 1;
	}
	result += "," + Collatz(max);
	return result.split(",").splice(0,result.length-1)
}


function findbiggest(n){
	var max = [];
	for (var i = 1; i < n; i++) {
		Collatz(i).length > max.length ? max = Collatz(i) : null;
	}
	return max;
}
//console.log(findbiggest(10))