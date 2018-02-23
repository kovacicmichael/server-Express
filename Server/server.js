//require http module

const http = require("http");
//define the port to listen on
const PORT = 8080;
//create generic function to handle requwsts and responses
function handleRequest(request, response){
	//below statements are triggered (user side) when the user visits the PORT url
	response.end("It works.  Path hit: " + request.url);

}


//here we use the node http package to create our server
//we then pass it the handleRequet fucntion to empower it with functionality
const server = http.createServer(handleRequest);

//kick off the server so that it can begin listening to cliet requests
server.listen(PORT, function(){
	//trigger this statement server side when the user visits the PORT url
	console.log("Server listeing on: http://localhost:" + PORT);
	
});