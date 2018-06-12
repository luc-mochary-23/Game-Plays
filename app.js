var express = require('express');
var app = express();
var path = require('path');


app.use( express.static( path.join(__dirname,'/public') ) );

app.get('/', function(req,res){
	var options = {
	    root: __dirname + '/public/html/',
	    dotfiles: 'deny',
	    headers: {
	        'x-timestamp': Date.now(),
	        'x-sent': true
	    }
  	};

  var fileName = req.params.name;

  res.sendFile( 'home.html', options);
})


app.listen(3000,function(){
	console.log('server running on 3000');
})