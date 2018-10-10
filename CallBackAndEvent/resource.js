var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource (m){
//stuffv
var maxEvents = m;
var self = this;

process.nextTick(function(){
    var count = 0;
    self.emit('start');
      var t =  setInterval(function(){
        self.emit('data', ++count);
       if(count == maxEvents){
        self.emit('end', count);
         clearInterval(t);
       }
     },10 );
    });

};

util.inherits(Resource, EventEmitter);

//Pour rendre l'objet ressource disponible 
module.exports = Resource;
