process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);
import app from '../index';

require('../src/models/restaurant.schema');
let restaurantModel = mongoose.model("restaurants");

let should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

/*
* Test the /search route
*/

describe('restaurant /search', () => {
    it('should call post call to search the restaurant', (done) => {
        chai.request(app)
            .post('/search')
            .send({
                "dishName": "Tatarák ze sumce s toustem"
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
