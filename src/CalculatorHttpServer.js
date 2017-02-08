/**
* OVERVIEW: Implement a CalculatorService that supports the following http operations:
* 		GET /calculator?op=<operation>op1=<num>&op2=<num>
*		POST /calculator and request body is a json object {"op":"<operation>","op1":"<num1>","op2":"<num2>"}
*		
*		Both GET/POST opertions should return 200 code on success and the response body should be the
*		sum of the 2 numbers
*
*	    Supported Operations:add,sub,mul,div
*
* ERROR CASES: Handle all error cases including:
*		Any Url other than /calculator/sum should return 404. 
*		Return status code for "bad request" if op1 and op2 are not numbers.
*	    Return status code for "method not allowed" if the request method is neither GET or POST
*	    LookUp the error code for bad request and method not allowed

* NOTES: Ensure you are starting the nodejs http server by running node CalculatorHttpServer.js before running the tests.
*/

var http = require('http');
var querystring = require('querystring');
var url = require('url');
var PORT = 3000;

// Add your code to startup http server and process request here.

http.createServer(function(req, res) {

}).listen(PORT, function(err){
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log("server is listening on " + PORT);
});

