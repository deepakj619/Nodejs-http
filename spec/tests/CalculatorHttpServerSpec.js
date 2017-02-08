var request = require('request');
//var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
var base_url = "http://localhost:3000";
var calculator_url = base_url + "/calculator";

describe("get sum of 2 numbers", function() {

    it("should return 8", function(done) {
        var self = this;
        var url = calculator_url + "?op=add&op1=3&op2=5";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(200);
                expect(parseInt(body)).toBe(8);

                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("post sum of 2 numbers", function() {

    it("should return 8", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "add";
        operationBody.op1 = 3;
        operationBody.op2 = 5;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    expect(body).toBe(8);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("get difference of 2 numbers", function() {

    it("should return 3", function(done) {
        var self = this;
        var url = calculator_url + "?op=sub&op1=6&op2=3";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(200);
                expect(parseInt(body)).toBe(3);

                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("post difference of 2 numbers", function() {

    it("should return 3", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "sub";
        operationBody.op1 = 6;
        operationBody.op2 = 3;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    expect(body).toBe(3);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("get multiplication of two numbers", function() {

    it("should return 8", function(done) {
        var self = this;
        var url = calculator_url + "?op=mul&op1=4&op2=2";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(200);
                expect(parseInt(body)).toBe(8);

                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("post multiplication of 2 numbers", function() {

    it("should return 8", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "mul";
        operationBody.op1 = 4;
        operationBody.op2 = 2;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    expect(body).toBe(8);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("get division of two numbers", function() {

    it("should return 2", function(done) {
        var self = this;
        var url = calculator_url + "?op=div&op1=4&op2=2";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(200);
                expect(parseInt(body)).toBe(2);

                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("post division of 2 numbers", function() {

    it("should return 2", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "div";
        operationBody.op1 = 4;
        operationBody.op2 = 2;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(200);
                    expect(body).toBe(2);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("post: wrong url", function() {

    it("should return 404", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "div";
        operationBody.op1 = 4;
        operationBody.op2 = 2;

        request.post({
                url: base_url + "/wrong",
                body: operationBody,
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

});

describe("get: wrong url", function() {

    it("should return 404", function(done) {
        var self = this;
        var url = base_url + "/wrong" + "?op=div&op1=4&op2=2";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(404);
                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("get: non numbers as input", function() {

    it("should return 400", function(done) {
        var self = this;
        var url = calculator_url + "?op=div&op1=break&op2=2";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(400);
                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("post: non numbers as input", function() {

    it("should return 400", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "div";
        operationBody.op1 = "break";
        operationBody.op2 = 2;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(400);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("get: missing inputs", function() {

    it("should return 400", function(done) {
        var self = this;
        var url = calculator_url + "?op=div&op2=2";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(400);
                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });

});

describe("post: missing inputs", function() {

    it("should return 400", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "div";
        operationBody.op2 = 2;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(400);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("put: sum of two numbers", function() {

    it("should return 405 status code", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "sum";
        operationBody.op1 = 2;
        operationBody.op2 = 2;

        request.put({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(405);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });

});

describe("post: nil parameter", function() {

    it("should return 400 status code", function(done) {
        var self = this;
        var operationBody = new Object();
        operationBody.op = "sum";
        operationBody.op1 = null;
        operationBody.op2 = 2;

        request.post({
                url: calculator_url,
                body: operationBody,
                json: true
            },
            function(error, response, body) {
                try {
                    expect(response.statusCode).toBe(400);
                    done();
                } catch (e) {
                    self.fail(Error("test failed due to " + JSON.stringify(e)));
                    done();
                }
            });
    });
});

describe("get: divide by zero", function() {

    it("should return Infinity", function(done) {
        var self = this;
        var url = calculator_url + "?op=div&op1=4&op2=0";

        request.get(url, function(error, response, body) {
            try {
                expect(response.statusCode).toBe(200);
                expect(body).toBe('Infinity');
                done();
            } catch (e) {
                self.fail(Error("test failed due to " + JSON.stringify(e)));
                done();
            }
        });
    });
});
