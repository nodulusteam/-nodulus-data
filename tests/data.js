// tests/config.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai


describe('data-init', function () {
  it('data-init should result in an dal object', function () {
    var dal = require('../datafactory.js');
     
    expect(dal).to.not.equal(undefined);
  });
});