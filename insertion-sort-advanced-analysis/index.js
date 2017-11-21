function merge(v, start, end) {
    if (end - start <= 1)
        return 0;

    if (end - start == 2) {
        if (v[start] > v[start + 1]) {
            tmp = v[start];
            v[start] = v[start + 1];
            v[start + 1] = tmp;
            return 1;
		}

        return 0;
	}

    var mid = Math.floor(start + (end - start) / 2);
    //console.log(start + ', ' + mid + ', ' + end);	
    var count = merge(v, start, mid) + merge(v, mid, end);

    var v1 = v.slice(start, mid);
    var index = start;
    var i = 0, j = mid;
    while (i < v1.length && j < end) {
		//console.log("i, j =" + ', ' + i + ', ' + j);			
        if (v1[i] <= v[j]) {
            v[index] = v1[i];
            i += 1;
		} else if (v1[i] > v[j]) {
            v[index] = v[j];
            count += (mid - start - i);
            j += 1;
		}
		
        index += 1;
	}

    while (i < v1.length) {
        v[index] = v1[i];
        index += 1;
        i += 1;
	}

    while (j < end) {
        v[index] = v[j];
        index += 1;
        j += 1;
	}

    //console.log('count = ' + count)
    return count;
}

function processData(input) {
    var input_rows = input.split("\r\n");
	var n = parseInt(input_rows[0]);
	//console.log(n);
	
	for(var r = 1; r < input_rows.length; r+= 2) {
		var data = input_rows[r+1].split(" ");
		//console.log(JSON.stringify(data));
		var count = merge(data, 0, data.length);
		//process.stdout.write("" + count + "\n");
		console.log("" + count);
	}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);      
});
