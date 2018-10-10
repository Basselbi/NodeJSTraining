//CallBack:
//No result till all results , will store evrything in memory till the end
//Request / reply
getThem(param, function(err, items){
 //checkForError
 //Operate on array of items
});

Events :
//Do not accumulate thing in mermory
//Publishn / subscribe , invoked for each item arrived


var results = getThem(param);


/*emitter.on(event, lisiner)*/
results.on(`item`, function(i){
  //do something with this one item
});

results.on(`done`, function(i){
  //no more item
});

results.on(`error`, function(i){
  //react to erro
});


/*Returning an event emitter */

//First Pattern for event emitter
var eventEmitter = require('events').EventEmitter;

//A function take a number and return instance of event emitter
var getResource = function(c)
{
  /**/
  var e = new  EventEmitter();
  process.nextTick(function(){
  var count = 0;
    e.emit('start');
    var t =  setInterval(function(){
     e.emit('data', ++count);
     if(count == c){
       e.emit('end', count);
       clearInterval(t);
     }
   },10 );
  });
  return(e);
};


var r = getResource(5);

r.on('start', function(){
  console.log('I started');
});

r.on('data', function(d){
  console.log("I receive data" + d );
});

r.on('end', function(t){
  console.log("I m done with "+ t + "data events");
});