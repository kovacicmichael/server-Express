// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3030;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
//that particular path is opptional
app.get("/api/:characters?", function(req, res) {
  // What does this code do?
  //sets the url input character to a variable
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    // What does this code do?
    //this will loop through the characters array, if the url input matches the character routname, it will return it
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }

    return res.send("No character found");
  }

  // What does this code do?
  //if no character is selected, then it will return all characters, but /api must be selected
  return res.json(characters);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
