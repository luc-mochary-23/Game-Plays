var express = require('express');
var app = express();
var path = require('path');


app.use( express.static( path.join(__dirname,'/public') ) );

app.get('/', function(req,res){
	res.send('hey')
  // res.sendFile('/public/html/home.html');
})

app.use(function(err){
	console.log(err);
	res.send("errrrrrrrr")
})


app.listen(3000,function(){
	console.log('server running on 3000');
})