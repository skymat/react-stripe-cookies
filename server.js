var express = require('express')
var ejs = require("ejs");
var app = express();
app.set('view engine', 'ejs');
var path = require('path');
var compression = require('compression');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST
app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


//React Server
require('babel-core/register')({
    presets: ["react", "es2015"]
})
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = React.createFactory(require('./appBack'));

app.get('*', function (req, res) {
  var AppHTML = ReactDOMServer.renderToString(App({url:req.url}));
  res.render('index',{resultat: AppHTML});
})


//Stripe
const keyPublishable = "pk_test_8xAO9MLDK5jF8zlMJwSBqKKr";
const keySecret = "sk_test_KjpwwIgd1HrGGP0gkhgY4LTD";

const stripe = require("stripe")(keySecret)

/*
// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
*/



app.post("/charge", (req, res) => {
  let amount = 500;
  console.log(req.body);
if (req.body && req.body.stripeToken){
  if (!req.body.stripeEmail)
    req.body.stripeEmail = "test@test.com";

    stripe.customers.create({
      email: req.body.stripeEmail,
      name : req.body.name,
      source: req.body.stripeToken
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
          currency: "eur",
          customer: customer.id
      }))
    .then(charge => res.json({value :"Paiement effectué avec succès"}));
}
else
  console.log("Pas de req.body");
});



var PORT = process.env.PORT || 80
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})