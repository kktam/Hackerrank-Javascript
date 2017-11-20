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

Array.prototype.empty = function () {
    return this.length == 0;
}

Array.prototype.peek = function () {
    return this[this.length - 1];
}

function largestRectangle(h, n) {
    // The stack holds indexes of h[] array recorded
    var s = [];

    var max_area = 0; 
    var tp;             // index position, for top of stack 
    var area_tp;        // area with top bar as the smallest bar

    var i = 0;
    while (i < n) {
        // If this bar is higher than the bar on top stack, push it to stack
        if (s.empty() || h[s.peek()] <= h[i]) {
            s.push(i);
            i += 1;
        } else {
            tp = s.peek(); // store the top index
            s.pop(); // pop the top

            // Calculate the area with h[tp]
            // if there are higher bar in front, then
            // width = right index (i) - left index (what's left in stack) - 1
            // width = right index - 0, if nothing on left
            area_tp = h[tp] * (s.empty() ? i : i - s.peek() - 1);

            max_area = Math.max(max_area, area_tp);
        }
    }

    // Now pop the remaining bars from stack and calculate area with every
    // popped bar as the smallest bar
    while (s.empty() == false) {
        tp = s.peek();
        s.pop();
        area_tp = h[tp] * (s.empty() ? i : i - s.peek() - 1);

        max_area = Math.max(max_area, area_tp);
    }

    return max_area;
}

function main() {
    var n = parseInt(readLine());
    h = readLine().split(' ');
    h = h.map(Number);
    var result = largestRectangle(h, n);
    process.stdout.write("" + result + "\n");

}
