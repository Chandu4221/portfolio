var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

/*Routes*/
var index = require('./routes/index.js');

/*set views and view engine*/
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require("ejs").renderFile);

/*set static folder*/
app.use(express.static(path.join(__dirname,'public')));


app.use('/',index);

app.listen(PORT,function(){
	console.log("Server Started at PORT "+PORT);
});