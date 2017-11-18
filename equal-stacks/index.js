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

function sum(list) {
	var sum = 0;
	
	for(var i = 0; i < list.length; i++) {
		sum += list[i];			
	}
	
	return sum;
}

function main() {
    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number);
    h2 = readLine().split(' ');
    h2 = h2.map(Number);
    h3 = readLine().split(' ');
    h3 = h3.map(Number);

	var sum_h1 = sum(h1);
	var sum_h2 = sum(h2);
	var sum_h3 = sum(h3);
	
	while (! (sum_h1 == sum_h2 && sum_h2 == sum_h3) ) {
    	if (sum_h1 > sum_h2 || sum_h1 > sum_h3) {
        	t = h1.shift();
			sum_h1 -= t;
		} 
		if (sum_h2 > sum_h1 || sum_h2 > sum_h3) {
        	t = h2.shift();
			sum_h2 -= t;
		}
    	if (sum_h3 > sum_h1 || sum_h3 > sum_h2) {
        	t = h3.shift();
			sum_h3 -= t;
		}
	}
    
	process.stdout.write("" + sum_h1 + "\n");	
}
