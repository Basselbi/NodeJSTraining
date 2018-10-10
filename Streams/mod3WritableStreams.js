console.log("Stdout is writabler ?" + process.stdout.writable);

process.stdout.write("hello");
process.stdout.write("world");


//Piping readable Stream to Writable Stream

var request = require('request');

var s = request('http://www.pluralsight.com/').pipe(process.stdout);

//WE can also pipe the output to a file 

var fs = require('fs');


request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));


//Dernier exemple 
var zlib = require('zlib');

request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));





 