let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.get("/", function(req, res){
  //res.json({ message: "Hello json"});
  __dirname = '/home/runner/boilerplate-express-2/'
  absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
});


app.use(bodyParser.urlencoded({extended: false}))

app.post("/name", function(req, res){
  var firstName = req.body.first;
  var lastName = req.body.last;

  //var string = firstName + ' ' + lastName

  res.json(
    {name: `${firstName} ${lastName}`}
  )
  //console.log(string)
});







































 module.exports = app;
