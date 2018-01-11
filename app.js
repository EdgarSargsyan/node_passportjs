const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const config = require('./config/index.js');
const ejs = require("ejs")
const ejsMate = require("ejs-mate");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const index = require("./routes/index");
const users = require("./routes/users");
const User = require('./model/schemas/users.js');

app.set("views", `${__dirname}/views`);
app.set("view engine", config.get("view-engine"));

app.use(express.static(`${__dirname}/public`));
app.engine("ejs", ejsMate);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'mySecretWord',
  key: 'SESSIONID',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", index);
app.use("/users", users);



let VKONTAKTE_APP_ID = 6294102;
let VKONTAKTE_APP_SECRET = 'ReBpKGZZzzOHLS06G2pu'

passport.use(new VKontakteStrategy(
  {
    clientID: VKONTAKTE_APP_ID,
    clientSecret: VKONTAKTE_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/vkontakte/callback",
    profileFields: ['city', 'bdate', 'email', 'age']
    
  },
  function myVerifyCallback(accessToken, refreshToken, params, profile, done) {
    console.log(profile);
    User.findOne({ vkId: profile.id }, (err, docs) => {
      if (err) throw err;
      if (docs != null) {
        return done(err, docs);
      } else {
        let vkUser = {
          name: profile.name.givenName,
          surname: profile.name.familyName,
          gender: profile.gender,
          provider: profile.provider,
          vkId: profile.id
        };
        let newUser = new User(vkUser);
        newUser.save().then(() => {
          console.log("ok");
          return done(null, newUser);
         }).catch((err) => {
              console.log(err);
            });
        };
    });
  }));

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});



app.use((req, res, next) => {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error")
});






app.listen(config.get('port'), () => {
  console.log(`Server running on port 3000 ...`);
});
