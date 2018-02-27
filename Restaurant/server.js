/*
need tables array
	name
	phone
	email
	unique id. routname
waitlist array

.post
	if table array full
	push to waitlist


.get

.delete

on click delete all arrays



*/

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var resList = [
		{
		  "customerName": "Mr. Snarf",
		  "phoneNumber": "971878",
		  "customerEmail": "snarf@snarf.coj",
		  "customerID": "Snarf"
  		}
]

var waitList = [
		{
		  "customerName": "Mr. Snarf",
		  "phoneNumber": "971878",
		  "customerEmail": "snarf@snarf.coj",
		  "customerID": "Snarf"
  		}

]

var both = [resList, waitList];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index_html.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "vew_html.html"));
});

app.get("/api", function(req, res){
	//res.json(resList);
	res.json(both);

})

app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen === "waitlist") {
    	console.log(chosen);
        return res.json(waitList);
      }else{
      	res.json(resList);
      }
});


app.delete("/api", function(req, res){

	resList = [];
	waitList = [];
	both = [resList, waitList]

	res.json()
});

app.post("/api/new", function(req, res){
	// req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newreservation.customerID = newreservation.customerID.replace(/\s+/g, "").toLowerCase();


  console.log(newreservation);
  	if(resList.length < 5){
  		resList.push(newreservation);	
	}else{
		waitList.push(newreservation)
  		
	}

	res.json(newreservation);
})







app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});