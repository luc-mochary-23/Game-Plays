var express = require('express');
var app = express();


app.use( express.static() );

app.get('/', function(req,res){
	res.sendFile('');
})


app.listen(3000,function(){
	console.log('server running on 3000');
})