// Write your part of speech array here
var words = ["apple", "person", "flower", "tree", "rain", "island","sand", "cat", "bird", "plant", "dress", "shirt", "bottle"];

// Create your wordPicker function here
function wg(){

var word = words[Math.floor(Math.random() * words.length)];
document.getElementById('word').innerHTML = word;
}

// A setInterval() to run the function every 2 seconds

window.setInterval(function() {
    wg();
    
}, 4000);

wg();