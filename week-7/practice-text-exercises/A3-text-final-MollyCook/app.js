
var txt;
var counts = {};
var keys = [];

function preload() {
    txt = loadStrings('./sotu-data/Eisenhower_1961.txt');
}

function setup() {
    var allwords = txt.join("\n");
    var tokens = allwords.split(/\W+/);
    
    for (var i=0; i<tokens.length; i++) {
        var word = tokens[i].toUpperCase();
        if (!/\d+/.test(word)) 
        if (counts[word] === undefined) {
            counts[word] = 1;
            keys.push(word);
        } else {
            counts[word] = counts[word] + 1;
        }
    }
    
    noCanvas();

}

keys.sort(compare);

function compare(a,b) {
    var countA = counts[a];
    var countB = counts[b];
    return countA - countB;
};

// for (var i = 0; i < keys.length; i++) {
//     // var key = keys[i]
//     createDiv(keys[i]);
// }



console.log(counts);

