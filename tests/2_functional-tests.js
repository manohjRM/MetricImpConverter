const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    test("Valid input convert 10L", ()=>{
        chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, "10");
            assert.equal(res.body.initUnit, "L");
            assert.approximately(res.body.returnNum, 2.64172, 0.1);
            assert.equal(res.body.returnUnit, "gal");
        })
    })

    test("Invalid input convert 32g", ()=>{
        chai.request(server)
        .get('/api/convert')
        .query({input: '32g'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            // assert.equal(res.body.initNum, "10");
            assert.equal(res.body.initUnit, undefined);
            // assert.approximately(res.body.returnNum, 2.64172, 0.1);
            // assert.equal(res.body.returnUnit, "gal");
        })
    })

    test("Invalid number convert 3/7.2/4kg", ()=>{
        chai.request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kg'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, undefined);
            // assert.equal(res.body.initUnit, "L");
            // assert.approximately(res.body.returnNum, 2.64172, 0.1);
            // assert.equal(res.body.returnUnit, "gal");
        })
    }) 
    
    test("Invalid number and invalid unit convert 3/7.2/4kilomegagram", ()=>{
        chai.request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kilomegagram'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, undefined);
            assert.equal(res.body.initUnit, undefined);
            // assert.approximately(res.body.returnNum, 2.64172, 0.1);
            // assert.equal(res.body.returnUnit, "gal");
        })
    })  

    test("No number convert kg", ()=>{
        chai.request(server)
        .get('/api/convert')
        .query({input: 'kg'})
        .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 1);
            assert.equal(res.body.initUnit, "kg");
            // assert.approximately(res.body.returnNum, 2.64172, 0.1);
            assert.equal(res.body.returnUnit, "lbs");
        })
    }) 

});
