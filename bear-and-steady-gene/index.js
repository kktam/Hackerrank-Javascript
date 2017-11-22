function valid(a, n) {
    if (a['A'] <= n/4 && a['G'] <= n/4 && a['T'] <= n/4 && a['C'] <= n/4) {
		return true;
	}
    return false;
}

function processData(input) {
	var rows = input.split("\r\n");
	var s = rows[1];
	var a = {"A": 0, "C":0, "G":0, "T":0 };
	var i;
	
    for (i=0 ; i<s.length ; i++) {
        a[s[i]] += 1;
	}
    //process.stdout.write("s = " + s + "\n"); 
    //process.stdout.write("a = " + JSON.stringify(a) + "\n"); 
	
    if (valid(a, s.length)) {
        return 0;
    }	
    
    var result = Number.MAX_SAFE_INTEGER;
    var replaced = 0;
    for (i=0 ; i<s.length ; i++) {
        a[s[i]] -= 1;
        while(valid(a, s.length) && replaced <= i) {
            result = Math.min(result, i-replaced+1);
            a[s[replaced]] += 1;
            replaced++;
        }
	}
	
	return result;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var result = processData(_input);
    process.stdout.write("" + result + "\n");   
});
