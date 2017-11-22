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

function createArray(d1, d2, val) {
    var arr = [];
    for(i = 0; i < d1; i++) {
        arr[i] = [];
        for(j = 0; j < d2; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function commonChild(s1, s2){
    var L = createArray(s1.length+1, s2.length+1, 0);
    for(var i=0;i<=s1.length;i++){
        for(var j=0;j<=s2.length;j++){
            if(i==0 || j==0)
                L[i][j]=0;
            else if(s1[i-1]==s2[j-1]){
                L[i][j] = L[i-1][j-1]+1;
            }
            else{
                L[i][j] = Math.max(L[i-1][j],L[i][j-1]);
            }
        }
    }
    return L[s1.length][s2.length];
}

function main() {
    var s1 = readLine();
    var s2 = readLine();
    var result = commonChild(s1, s2);
    process.stdout.write("" + result + "\n");

}
