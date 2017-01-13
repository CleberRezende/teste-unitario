// test/test.js

var assert = require('assert');
var exemplo = require('../lib/exemplo');

describe("exemplo-ut", function () {
    describe("request", function () {
        it('apenas true', function () {
            assert.equal(true, true);
        });
    });
});
it('chamada ao servico Nome Serviço', function () {
    exemplo.chamaServico(function (response) {
        console.log(response);
    });
});
