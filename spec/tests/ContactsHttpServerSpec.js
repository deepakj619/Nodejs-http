var request = require('request');
var base_url = "http://localhost:3000";
var contacts_url = base_url + "/contacts";

describe("Contact Test Suite", function() {
    var idCreated;

    it("should get 404", function(done) {
        var self = this;
        request.get({
                url: base_url + "/badurl",
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(404);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

    it("should get 400", function(done) {
        var self = this;
        request.get({
                url: contacts_url + "?id=500",
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(404);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

    it("should create contact", function(done) {
        var self = this;
        var contact = new Object();
        contact.firstName = "jagan";
        contact.lastName = "peri";
        contact.phone = "23002300";

        request.post({
                url: contacts_url,
                body: contact,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    idCreated = body.id;
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

    it("should retrieve contact", function(done) {
        var self = this;
        request.get({
                url: contacts_url + "/" + idCreated,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    expect(body.firstName).toBe("jagan");
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

    it("should update contact", function(done) {
        var self = this;
        var updatedContact = new Object();
        updatedContact.phone = "32003200";
        request.put({
                url: contacts_url + "/" + idCreated,
                body: updatedContact,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

    it("should retrieve updated contact", function(done) {
        var self = this;
        request.get({
                url: contacts_url + "/" + idCreated,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    expect(body.firstName).toBe("jagan");
                    expect(body.phone).toBe("32003200");
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });
});