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

function findSum(list, x) {
	var sum = 0;
    
    var j = 0;
	for(var i = 0; i < list.length; i++) {
        j++;
        sum += list[i];	
        if (sum > x) {
            sum -= list[i];
            j--;
            break;
        }		
	}
	
	return {
        "sum": sum,
        "numberOfItems": j
    };
}

function main() {
    var g = parseInt(readLine());
    for(var a0 = 0; a0 < g; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var x = parseInt(n_temp[2]);
        a = readLine().split(' ');
        a = a.map(Number);
        b = readLine().split(' ');
        b = b.map(Number);
        // your code goes here
        //process.stdout.write("" + x + "\n");  
        //process.stdout.write("" + a + "\n");          
        //process.stdout.write("" + b + "\n"); 

        result_b = findSum(b, x);
        //process.stdout.write("" + JSON.stringify(result_b) + "\n"); 

        var lengthB = result_b.numberOfItems;
        var maxScore = result_b.numberOfItems;
        var sum = result_b.sum;

		for (var lengthA = 1; lengthA <= a.length; lengthA++) {
			sum += a[lengthA - 1];

			while (sum > x && lengthB > 0) {
				lengthB--;
				sum -= b[lengthB];
			}

			if (sum > x) {
				break;
			}

			maxScore = Math.max(maxScore, lengthA + lengthB);
		}

        process.stdout.write("" + maxScore + "\n");        
    }
	    
}
