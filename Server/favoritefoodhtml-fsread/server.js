var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server, sets it up and ready to call
var server = http.createServer(handleRequest);

function handleRequest(req, res) {

	var path = req.url;

	switch(path){
		case "/":
			return displayIndex(path, req, res);
		case "/movies":
			return displayMovie(path, req, res);
		case "/food":
			return displayFood("/food.html", req, res);
		default:
      		return display404(path, req, res);


	}

  // Here we use the fs package to read our index.html file
  //(whatever directory i am running this js file, you will find the html file, file name, callback function)
  // fs.readFile(__dirname + "/index.html", function(err, data) {

  //   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
  //   // an html file.
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   //data is all of the html that the readfile pulls
  //   res.end(data);
  // });
}


function displayIndex(url, req, res){

	fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    //data is all of the html that the readfile pulls
    res.end(data);
  });
}

function displayMovie(url, req, res){
	fs.readFile(__dirname + "/movie.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    //data is all of the html that the readfile pulls
    res.end(data);
  });

}

function displayFood(filename, req, res){
	fs.readFile(__dirname + filename, function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    //data is all of the html that the readfile pulls
    res.end(data);
  });

}

function display404(url, req, res){
	
	var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    //data is all of the html that the readfile pulls
    res.end(myHTML);
};



server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});