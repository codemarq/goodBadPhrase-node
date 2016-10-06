// require http
var http = require('http');

// require twitter
var Twitter = require('twitter');

// require random phrases


// define ports to listen to
var goodPORT = 7000;
var badPORT =  7500;

// function to handle requests and responses
function handleRequest(request, response) {
	response.end('We made it everyone! This was your URL: ' + request.url);
}

// create web server object
var server = http.createServer(handleRequest);

// start web server good news
server.listen(goodPORT, function () {
	// this callback is triggered when  server is successfully listening
	console.log('Server Listening on port ' + PORT);
});

// start web server bad news
server.listen(badPORT, function () {
	// this callback is triggered when  server is successfully listening
	console.log('Server Listening on port ' + PORT);
});