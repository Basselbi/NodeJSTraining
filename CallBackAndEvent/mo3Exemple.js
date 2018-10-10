var Resource = require('./resource');

var r = new Resource(10);

r.on('start', function(){
    console.log("I start");
});

r.on('data', function(d){
    console.log("I have this data " + d );
});

r.on('end', function(t){
    console.log("Done with " + t);
});