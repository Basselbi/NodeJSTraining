//Instance of and extension to Event Emitter with an agreed upon "Interface"

// Manage I/O , network Trafic , https request, tcp socket 
//stdin , stdout


//Readable stream Exemple 
var request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', function(chunk){
	console.log(">>>>Data>>>" + chunk);
});

s.on('end', function(){
	console.log("Done!!");
});