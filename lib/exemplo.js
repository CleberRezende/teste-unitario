var http = require('http');
    // util = require('./util');

/*
    exports.chamaServico = function(callback) {
        callback("Hello World");
    }
*/

/*
    exports.chamaServico = function(callback) {
        http.request('http://graph.facebook.com/nodejs', function(response) {
            callback("Hello World");
        })
        .end();
    }
*/

/*
    exports.chamaServico = function(callback) {
        http.request('http://graph.facebook.com/nodejs', function(response) {
            var stringResposta = '';

            response.on('data', function(data) {
                stringResposta += data;
            });

            response.on('end', function() {
                callback(JSON.parse(stringResposta));
            });
        })
        .end();
    }
*/



exports.chamaServico = function(callback) {
    http.request(this.getUrl(), function(response) {
        var stringResposta = '';

        response.on('data', function(data) {
            stringResposta += data;

        });

        response.on('end', function() {
            callback(JSON.parse(stringResposta));

        });
    }).end();
}




















