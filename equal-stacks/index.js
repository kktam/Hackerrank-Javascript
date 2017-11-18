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

function validateSum(drum_items_list, drum_sums) {
	var max = 0;
	var idx = 0;
	var sumsEqual = true;
	
	for(var i = 0; i < drum_items_list.length; i++) {
		if (drum_sums[i] > max) {
			max = drum_sums[i];
			idx = i;
		}
		
		if (i > 0) {
			if (drum_sums[i] != drum_sums[i - 1]) {
				sumsEqual = false;
			}
		}			
	}
	
	return {
		"max": max,
		"idx": idx,
		"sumsEqual": sumsEqual
	}
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

	var drum_sums = [ 0, 0, 0 ];
	var drum_items_list = [ n1, n2, n3 ];
	var items = [ h1, h2, h3 ];
	for(var i = 0; i < drum_items_list.length; i++) {
		drum_items = drum_items_list[i];
		
		// add the sum from reverse of the drum (stack)
		for(var j = items[i].length - 1; j >= 0 ; j--) {
			drum_sums[i] += items[i][j];
		}
	}
	
	var evalResult = validateSum(drum_items_list, drum_sums);
	//process.stdout.write("evalResult =" + JSON.stringify(evalResult) + "\n");	

	var count = 1;
	
	while(evalResult.sumsEqual == false) {
		// subtract from top of the stack currently with largest sum
		var toBeSubtracted = (items[evalResult.idx]).shift();
		drum_sums[evalResult.idx] -= toBeSubtracted;
		//process.stdout.write("drum_sums in loop =" + JSON.stringify(drum_sums) + "\n");		
		//process.stdout.write("items in loop =" + JSON.stringify(items) + "\n");			

		evalResult = validateSum(drum_items_list, drum_sums);
		//process.stdout.write("evalResult in loop =" + JSON.stringify(evalResult) + "\n");

		if (++count > 10) {
			return;
		}

	}
    
	process.stdout.write("" + drum_sums[0] + "\n");	
}
