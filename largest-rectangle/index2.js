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

function largestRectangle(h) {
    var maxArea = 0;
    var indices = [];
    for (var i = 0; i < h.length; i++) {
        process.stdout.write("i = " + i  + "\n");
        process.stdout.write("h[i] = " + h[i]  + "\n");
        process.stdout.write("h[indices[indices.length - 1]] = " + h[indices[indices.length - 1]]  + "\n");
        process.stdout.write("for loop indices = " + JSON.stringify(indices) + "\n");

        while (!(indices.length == 0) && h[i] <= h[indices[indices.length - 1]]) {
            process.stdout.write("while loop indices = " + JSON.stringify(indices) + "\n");
            var index = indices.pop();
            var area = h[index]
                    * (i - ((indices.length == 0) ? 0 : (indices[indices.length - 1] + 1)));
            maxArea = Math.max(maxArea, area);
        }
        indices.push(i);
    }
    return maxArea;
}

function main() {
    var n = parseInt(readLine());
    h = readLine().split(' ');
    h = h.map(Number);
    var result = largestRectangle(h);
    process.stdout.write("" + result + "\n");

}
