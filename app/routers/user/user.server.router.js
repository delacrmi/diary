'use strict'

var user = require('../../controllers/user/user.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	app.route('/signup')
	.get(user.renderSignup)
	.post(user.signup);

	app.route('/signin')
	.get(user.renderSignin)
	.post(passport.authenticate('local',{
		successRedirect: '/',
		failureRedirect: 'signin',
		failureFlash: true
	}));

	//Configurar la route 'signout'
  app.get('/signout', user.signout);
	
};

/*app.route('/user')
	.post(user.create)
	.get(user.list);

	app.route('/user/:userId')
	.get(user.read)
	.put(user.update)
	.delete(user.delete);

	//middlewares params configurations
	app.param('userId',user.userById);*/
