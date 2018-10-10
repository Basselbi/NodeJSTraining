//MOdified example from node js 

process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data',function(chunk){
	process.stdout.write('data-->' + chunk);
});


process.stdin.on('end',function(){
	process.stderr.write('End!\n');
});

//After we can run this in the terminal and it will be lisining the user input and making it out 