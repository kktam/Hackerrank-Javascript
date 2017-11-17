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

function isBalanced(s) {
    var length = s.length;
	
	var paramStack = [];
	for(var i = 0; i < length; i++) {
		var c = s[i];
		//console.log("c =" + c);
		if (c == '[' || c == '{' || c == '(' ) {
			paramStack.push(c);
		} else if (c == ']' || c == '}' || c == ')' ) {
			var popParamthesis = paramStack.pop();
			//console.log("popParamthesis = " + popParamthesis);
			switch(c) {
				case  ']': if (popParamthesis != '[') return "NO"; break;
				case  '}': if (popParamthesis != '{') return "NO"; break;
				case  ')': if (popParamthesis != '(') return "NO"; break;
				default: return "NO"; break;
			}
		}
	}
	
	if (paramStack.length > 0) {
		return "NO";
	}
	return "YES";
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();
        var result = isBalanced(s);
        process.stdout.write("" + result + "\n");
    }

}