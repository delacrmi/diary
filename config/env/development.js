module.exports = {
	db: 'mongodb://localhost/notes',
	sessionSecret: 'developmentSessionSecret',
	google:{
		//https://console.developers.google.com/project/
		clientID: '969785948160-s6rfcrem5h76139o5gqnoq1ohbg134s2.apps.googleusercontent.com',
		clientSecret: 'P5E0r7I2e974xtOD_Wh4_5Ni',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
}