var express = require('express');
var app = express();
var path = require('path');


app.use( express.static( path.join(__dirname,'/public') ) );

app.get('/', function(req,res){
  res.sendFile('/public/html/home.html');
})

app.listen( process.env.PORT || 3000,function(){
	console.log('server running on 3000');
})