// Testing out node.js

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(z) {
	// console.log(waitTime);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`Loading Percentage...${z}%`);
};

var interval = setInterval(function(){
	currentTime += waitInterval;
	percentWaited = Math.floor( (currentTime/waitTime) * 100); 
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function(){
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\n Complete! \n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);

