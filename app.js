var express = require('express'),
path = require('path'),
cons = require('consolidate'),
dust = require('dustjs-helpers'),
dustlinkedin = require('dustjs-linkedin')
app = express();

var server = require('http').createServer(app);

/* Assing Dust Engine to .dust Files, and the files will be converted to HTML for the browser,
 * this is a view engine for nodejs
 */
app.engine('dust',cons.dust);

/*
 * Setting node dust as view engine, to process all dust files
 * Set Default Ext .dust
 */ 
app.set('view engine', 'dust','dustjs-linkedin');

/*
 * Setting node the view folder, responsable to render the HTML's files
 */
app.set('views',__dirname + '/views');

/*
 * Setting public as static folder for using CSS
 */
app.use(express.static(path.join(__dirname,'public')));

// Starting Server on PORT 3000
app.listen(process.env.PORT || 3000, function(){
	console.log('Server Started On Port 3000');
});

/*
 * I prefer to isolate all get and post request in a file especif file
 * in that way, it makes the code much more cleaner
 */
require('./server/routes')(app);