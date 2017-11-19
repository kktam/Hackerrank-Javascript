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

        sum_a = sum(a);
        sum_b = sum(b);
        remove_sum_a = 0;
        remove_sum_b = 0;
        num_of_items_removed = 0;
        num_of_items_a_removed = 0;
        num_of_items_b_removed = 0;
        
        while (remove_sum_a + remove_sum_b <= x) {
            // if both sum are same, remove A first
            if (sum_a >= sum_b) {
                if (a[0] + remove_sum_a + remove_sum_b > x) {
                    break;
                }
                if (num_of_items_a_removed + 1 > n) {
                    break;
                }

                t = a.shift();
                sum_a -= t;
                remove_sum_a += t;

                ++num_of_items_a_removed;
                ++num_of_items_removed;

                //process.stdout.write("removed a, now remains " + a + "\n");              
            } else {
                if (b[0] + remove_sum_a + remove_sum_b > x) {
                    break;
                }
                if (num_of_items_b_removed + 1 > m) {
                    break;
                }                

                t = b.shift();
                sum_b -= t;
                remove_sum_b += t;

                ++num_of_items_b_removed;
                ++num_of_items_removed;
                //process.stdout.write("removed b, now remains " + b + "\n");                               
            }
        }

        process.stdout.write("" + num_of_items_removed + "\n");        
    }
	    
}
