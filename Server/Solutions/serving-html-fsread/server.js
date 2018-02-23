// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server, sets it up and ready to call
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  //(whatever directory i am running this js file, you will find the html file, file name, callback function)
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    //data is all of the html that the readfile pulls
    res.end(data);
  });
}

// Starts our server, calls it
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
