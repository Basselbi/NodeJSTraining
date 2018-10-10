var fs = require('fs');

if (fs.existsSync('temp')){
	
	console.log('directory exist , removing ...');
	
	if(fs.existsSync('temp/new.txt')){
		fs.unlinkSync('temp/new.txt');
		console.log('file removed');
	}
	fs.rmdirSync('temp');
}else{
	console.log('File not found, file will be created now ');
}

fs.mkdir('temp');

if(fs.existsSync('temp')){
	process.chdir('temp');
	console.log('Iam in temp');
	
	fs.writeFileSync("test.txt", data, (error) => { /* handle error */ });
	fs.renameSync('test.txt','new.txt');
	
	console.log('File has size :' + fs.statSync('new.txt').size + 'bytes');
	console.log('File has size :' + fs.readFileSync('new.txt').toString());
	
	
}