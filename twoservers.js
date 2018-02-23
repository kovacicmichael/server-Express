const http = require("http");

const PORT1 = 7000;

const PORT2 = 7500;

function handleRequestOne(request, response){
	//below statements are triggered (user side) when the user visits the PORT url
	response.end("Server one works.  Path hit: " + request.url);

}

function handleRequestTwo(request, response){
	//below statements are triggered (user side) when the user visits the PORT url
	response.end("Server two works.  Path hit: " + request.url);

}


const serverOne = http.createServer(handleRequestOne);

const serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORT1, function(){
	//trigger this statement server side when the user visits the PORT url
	console.log("Server one listeing on: http://localhost:" + PORT1);
	
});

serverTwo.listen(PORT2, function(){
	//trigger this statement server side when the user visits the PORT url
	console.log("Server two listeing on: http://localhost:" + PORT2);
	
});