var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use('/', routes);

var PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });