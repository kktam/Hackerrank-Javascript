function processData(input) {
	var arr = input.split("\r\n");
	var sum = 0;
	
	// get cumulated sum from the left
    for(var i=0; i<arr.length; i++){
		sum += arr[i];
    }
        
	// calculate incremental cumulate sum from the right
	var curr = 0;
	for(var j=0; j<arr.length; j++){
		// compare right sum to left 
		if(curr == sum - arr[j]-curr){
			return "YES";
		}
		curr += arr[j];
	}
	return "NO";
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   var answer = processData(_input);
   process.stdout.write("" + answer + "\n");    
});