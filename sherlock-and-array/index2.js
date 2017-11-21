process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(a){
	var sum = 0;
	
	// get cumulated sum from the left
    for(var i=0; i<a.length; i++){
		sum += a[i];
    }
        
	// calculate incremental cumulate sum from the right
	var curr = 0;
	for(var j=0; j<a.length; j++){
		// compare right sum to left 
		if(curr == sum - a[j]-curr){
			return "YES";
		}
		curr += a[j];
	}
	return "NO";
}

function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
        var result = solve(a);
        process.stdout.write(""+result+"\n");
    }
}
