var express = require('express')
var router = express.Router()
// var turbo = require('turbo360')({site_id: '<app_id>'})


router.get('/', function(req, res, next){

	res.render('index', null)
	
})

module.exports = router



