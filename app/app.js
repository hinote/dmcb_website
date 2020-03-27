const local_app = function () {}

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)

	app.get('/testtemplate', function (req, res) {
		enduro.api.temper.render('testtemplate', { whatsit: 'does this work?' })
			.then((output) => {
				res.send(output)
			})
	})

	app.get('/hello', function (req, res) {
		res.send('hello world')
	})

	app.get('/music', function (req, res) {
		res.redirect('https://drive.google.com/drive/folders/0B1QptYff2GCWeWdDenFYYmRpQUU')
	})
}



module.exports = new local_app()
