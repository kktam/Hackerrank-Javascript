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

	var drum_sums_found = {};
	var drum_items_list = [ n1, n2, n3 ];
	var items = [ h1, h2, h3 ];
	for(var i = 0; i < drum_items_list.length; i++) {
		var drum_sum = 0
		drum_items = drum_items_list[i];
		
		// add the sum from reverse of the drum (stack)
		for(var j = items[i].length - 1; j >= 0 ; j--) {
			drum_sum += items[i][j];
			if (drum_sums_found[drum_sum] != null) {
				drum_sums_found[drum_sum] += 1;
			} else {
				drum_sums_found[drum_sum] = 1;
			}
		}
	}
	
	var k = Object.keys(drum_sums_found);
	k = k.sort(function (a, b) { return b - a; });
    
	//process.stdout.write("drum_sums_found =" + drum_sums_found[9] + "\n");	
    //process.stdout.write("keys =" + k + "\n");	
	
	/*
	for(i = k.length - 1; i >= 0; i--) {
		var keyItem = k[i];
			process.stdout.write("" + keyItem + " contains " + drum_sums_found[keyItem] + "\n");
	};
*/	

	var found = false;
	for(i = k.length - 1; i >= 0; i--) {
		var keyItem = k[i];
		if (drum_sums_found[keyItem] == 3) {
			process.stdout.write("" + keyItem + "\n");
			found = true;
			break;
		}
	};	
	
	if (!found) {
			process.stdout.write("" + 0 + "\n");		
	}
}
