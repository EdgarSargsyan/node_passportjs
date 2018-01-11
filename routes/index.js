const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongodb = require('../model/db.js');
const ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://127.0.0.1:27017/test';
const User = require('../model/schemas/users.js');



router.get("/", (req, res, next) => {
	res.render(`index`, { title: "Registration form", user: '' });
});

router.get('/auth/vkontakte',
passport.authenticate('vkontakte'));

router.get('/auth/vkontakte/callback',
passport.authenticate('vkontakte', { failureRedirect: '/' }),
function (req, res) {
	res.render(`index`, {title: "Registration form", user: req.user})
});







module.exports = router;