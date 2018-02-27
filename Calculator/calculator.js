// * **Instructions**

//   * You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.

//   * There are four operation values which a user may use: addition, subtraction, multiplication, and division.

//   * When the route is hit, your browser should display the result of the math operation and the two numbers on the screen.

//     * For example, when the user goes to the url <http://localhost:3000/add/10/1>, the page should display 11.



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


app.get("/", function(req, res) {

	res.json("Choose your operator and then your numbers in the url!");

  //res.sendFile(path.join(__dirname, "index_html.html"));
});


app.get("/:operator/:number/:number2", function(req, res) {

	var operator = req.params.operator
	var num1 = parseInt(req.params.number);
	var num2 = parseInt(req.params.number2);


	if(operator == "add"){
		var total = num1 + num2;
		//res.json(total);
		console.log("num1 + num2 = " + total)

	}else if(operator == "subtract"){
		var total = num1 - num2;
		//res.json(total);

	}else if(operator == "multiply"){
		var total = num1 * num2;
		//res.json(total);

	}else if(operator == "divide"){
		var total = num1 / num2;
		//res.json(total);

	}else{
		res.json("Please enter a valid operator and number set");

	}

  res.send(total.toString())
});












app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});