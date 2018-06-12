var express = require('express');
var app = express();
var path = require('path');


app.use( express.static( __dirname + '/public') );

app.get('/', function(req,res){
	res.sendFile( path.join(__dirname,'/public/html/home.html') );
})


app.listen(3000,function(){
	console.log('server running on 3000');
})