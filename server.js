const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');


const cors = require('cors');


require("dotenv").config();



//Initiate our app
const app = express();
const PORT = process.env.PORT || 3001;

//Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(passport.initialize());
// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
app.use(session({
  secret: 'countdown-project',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}))

// Configure Mongoose
mongoose.connect(

  process.env.MONGODB_URI || "mongodb://localhost/countdown-project",
  // process.env.MONGODB_URI || "mongodb://192.168.56.10/countdown-project",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const routes = require('./routes');
require('./models');

// Configure Passport
const localSignupStrategy = require('./config/local-signup');
const localLoginStrategy = require('./config/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use(routes);



// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
