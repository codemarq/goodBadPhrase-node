// require http
var http = require('http');

// require twitter
var Twitter = require('twitter');

// random phrases
var niceArray = ['You look nice.','Great Job','You are GREAT!','Keep it up!'];

var meanArray = ['You Suck!','Ass',	'GFY'];

function randomPhrase (array) {
	randomNum = Math.random() * array.length;
	console.log(array[randomNum]);
	return array[randomNum];
};


// define ports to listen to
var goodPORT = 7000;
var badPORT =  7500;

// function to handle requests and responses
function handleRequestNice(request, response) {
	response.end(randomPhrase(niceArray));
};

function handleRequestMean(request, response) {
	response.end(randomPhrase(meanArray));
};

// create web server object
var goodServer = http.createServer(handleRequestNice);
var badServer = http.createServer(handleRequestMean);

// start web server good news
goodServer.listen(goodPORT, function () {
	// this callback is triggered when  server is successfully listening
	console.log('Server Listening on port ' + goodPORT);
});

// start web server bad news
badServer.listen(badPORT, function () {
	// this callback is triggered when  server is successfully listening
	console.log('Server Listening on port ' + badPORT);
});