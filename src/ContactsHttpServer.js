/**
 *
* OVERVIEW: In this activity, you will implement a REST service to manage contacts. The rest service will store/retrieve contacts
* in memory. The rest service will implement the following operations:

	GET /contacts/id  This will read the specified contact from in memory data structure and return it in the response.
	Format for the Response body is:
	{"firstName":"Bill","lastName":"Gates","phone":"32003200"}

	POST /contacts  This will accept a JSON payload, create the contact in memory data structure and return id in the response.
	Format of JSON request body is: {"firstName":"Bill","lastName":"Gates","phone":"32003200"}
	Format of the JSON response is: {id:<id-of-new-contact}

	PUT /contacts/id  This will update the specified contacts details with the details in the JSON payload.
	Only fields that are specified in the request body need to be updated. Other fields of that contact should
	remain unchanged.
	Format of JSON request body is: {"firstName":"Bill","lastName":"Gates","phone":"32003200"}
	Format of the JSON response is: {id:<id-of-updated-contact>}

* ERROR CASES: Handle all error cases including:
*		Any Url other than urls shown above should return 404
*		Return bad request if any query string parameters are passed.
*		Return 404 if a non-existent contact id is passed.

* NOTES:
      1) Ensure you are starting the nodejs http server by running node ContactsHttpServer.js before running the tests.
*/

var url = require('url');
var http = require('http');
var querystring = require('querystring');
var PORT = 3000;
var contacts=[];
var id;
var identification=[];

// Add your code for the contact server below


http.createServer(function(req, res) {

	
	var myurl=req.url;
    if(myurl.search("contacts")!=1){

        res.statusCode=404;
        res.end();
    }
    if(req.method=='GET'){

    	
    	var query=url.parse(req.url,true).query;
    	id=query.id;
    	if(myurl.indexOf("?")>0){

    		res.writeHead(404,{"Content-Type" : "text/json"});
    		res.end(JSON.stringify(contacts[id]));
    	}
    	else{
    		
    	for(var i=0;i<contacts.length;i++){


    			var contact=contacts[i];
    			if(contact["id"]==identification[i]){

    				res.writeHead(200);
    				res.end(JSON.stringify(contact));
    			}


    	}
    }
    	
    }
    else if(req.method=="POST"){

    	var jsonString = '';
        req.on('data', function (data) {
        	data=data.toString();
            jsonString += data;
        });
        req.on('end', function () {
			
            var contact = JSON.parse(jsonString);
            id=contact.phone;
           	contact.id=id;
           	contacts.push(contact);
           	identification.push(id);
           	res.writeHead(200, {"Content-Type" : "text/plain"});
           	res.end(contact.id);           
        });


    }else if(req.method=="PUT"){

    	var jsonString="";
    	req.on('data', function (data) {
        	data=data.toString();
            jsonString += data;
        });
        req.on('end', function () {
			
            var update = JSON.parse(jsonString);
            console.log(update);
            var cell=update.phone;
            console.log(cell);
            console.log(contacts);
            console.log(identification)
           	for(var i=0;i<contacts.length;i++){

           		var con=contacts[i];
           		console.log(con.id);
           		if(con.id==identification[i]){

           			con["phone"]=cell;
           			res.writeHead(200, {"Content-Type" : "text/plain"});
           			res.end(con[id]); 
           		}
           	}
           	          
        });
    	
    }


}).listen(PORT, function(err){
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log("server is listening on " + PORT);
});
