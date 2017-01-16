// test/test.js

var  assert = require('assert'),
     exemplo = require('../lib/exemplo'),
     http = require('http'),
     sinon = require('sinon'),
     mockery = require('mockery'),
     util = require('../lib/util'),
     server;



before(function() {
    server = http.createServer(function(req, res) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(JSON.stringify(retornoFacebook));
        res.end();
    });

    server.listen(3000, function() {
        console.log('Iniciando HTTP Server.');
    });

    var utilMock = sinon.stub(exemplo, 'getUrl', function () {
        return 'http://localhost:3000';
    });

    mockery.registerMock('../lib/util', utilMock);

});

after(function() {
    server.close(function() {
        console.log('Finalizando HTTP Server');
    });
});



var retornoFacebook = {"id": "197262326951664",
    "about": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.",
    "can_post": false,
    "category": "Software",
    "checkins": 0,
    "description": "Evented I/O for V8 JavaScript.\n\nSome usefull links:\nhttp://howtonode.org/\nhttp://nodetuts.com/\nhttp://www.nodebeginner.org/\nhttp://dailyjs.com/2010/11/01/node-tutorial/\n",
    "has_added_app": false,
    "is_community_page": false,
    "is_published": true,
    "likes": 1723,
    "link": "https://www.facebook.com/nodejs",
    "name": "node.JS",
    "parking":
        {"lot": 0,
            "street": 0,
            "valet": 0},
    "talking_about_count": 11,
    "username": "nodejs",
    "website": "http://www.nodejs.org\nhttps://github.com/ry/node/wiki",
    "were_here_count": 0}




describe("exemplo-ut", function () {
    describe("request", function () {
        it('apenas true', function () {
            assert.equal(true, true);
        });
    });
});
it('chamada ao servico', function () {
    exemplo.chamaServico(function (response) {
        assert.deepEqual(retornoFacebook, response);
        done();
    });
});
