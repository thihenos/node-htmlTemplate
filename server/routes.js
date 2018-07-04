'use strict';

module.exports = function (app) {

		/* If the user tries to access any address of the app which not exists in routes.js file, 
		 * it will be send to the show page, which will return all data saved
		 */
		app.route('/*').get(function (req, res) {
	    	res.render('home/home');
	  	});

};