/**
* OVERVIEW: Implement a CalculatorService that supports the following http operations:
* 		GET /calculator?op=<operation>op1=<num>&op2=<num>
*		POST /calculator and request body is a json object {"op":"<operation>","op1":"<num1>","op2":"<num2>"}
*		
*		Both GET/POST operations should return 200 code on success and the response body should be the
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

function getResult(operation, number1, number2)
{
    var result = 0;

    if(operation == "add")
        result = number1 + number2;

    else if(operation == "sub")
        result = number1 - number2;

    else if(operation == "mul")
        result = number1 * number2;

    else if(operation == "div") {
        //if it is zero u must raise an error
        if(number2 == 0){

            return "Infinity"
        }
        result = number1 / number2;
    }
    return result;
}
http.createServer(function(req, res) {

    var querystring=new String(req.url);
    var myurl = req.url;
    if(myurl.search("calculator")!=1){

        res.statusCode=404;
        res.end();

    }
    if(req.method=='GET'){

        var temp=querystring.split("&");
        for(var i=0;i<temp.length;i++) {

            temp[i] = temp[i].split("=").pop();
        }
        if(isNaN(temp[1]) || isNaN(temp[2])){

            res.statusCode=400;
            res.end();
        }
        temp[1]=parseInt(temp[1]);
        temp[2]=parseInt(temp[2]);
        var ans=getResult(temp[0],temp[1],temp[2]);
        res.statusCode=200;
        res.body=ans.toString();
        res.end(res.body);
    }
    else if(req.method=='POST'){

        var jsonString = '';
        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {

           query=JSON.parse(jsonString);
           op=query.op;
           op1=query.op1;
           op2=query.op2;

           if(typeof op1!="number" || typeof op2!="number"){

               res.statusCode=400;
               res.end();
           }else {
               var ans = getResult(op, op1, op2);
               res.statusCode = 200;
               res.body = ans.toString();
               res.end(res.body);
           }
        });

    }
    else{

        res.statusCode=405;
        res.end();

    }

}).listen(PORT, function(err){
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log("server is listening on " + PORT);
});

