var http = require("http");
/*from   www .j  a  v  a2  s.  com*/
function process_request(req, res) {
     var body = 'Thanks for calling!\n';
     var content_length =  body.length ;
     res.writeHead(200, {
         'Content-Length': content_length,
         'Content-Type': 'text/plain'
     });
     res.end(body);
}
var s = http.createServer(process_request);
s.listen(8080);

function longRunningOperation(callback) { 
    // simulate a 3 second operation 
    setTimeout(callback, 3000); /*from www  .j a  va2s .  c  o m*/
} 

function userClicked() { 
    console.log('starting a long operation'); 
    longRunningOperation(function () {
         console.log('ending a long operation');
    }); 
} 
// simulate a user action 
userClicked(); 