const express = require('express');
const app = express();


app.get('/', function(req, res)     
{
 res.send('hello wordl');
});

const port = process.env.PORT || 3000;; 

 
app.listen(port, function()
{
console.log("myAPp LIsent port " + port)

});