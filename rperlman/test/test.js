// Testing file for JSON examples
var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');
var data = require('./boston.json');

ex.data = data;

describe('JSON Exercises - ex-highestEarning', function() {
    it('Finds the largest total earnings', function() {
        ex.maxEarnings().should.equal(415709.53);
    });
});

describe('JSON Exercises - number earnings above x', function() {
    it('Count of salaries above "x" ', function() {
        ex.earningsAbove(150000).should.equal(1198);
    });
});

describe('JSON Exercises - total Base Payroll', function() {
    it('total base payroll', function() {
        ex.totalBasePayroll().should.equal(1226524911);
    });
});

describe('JSON Exercises - total Payroll with Overtime', function() {
    it('total earnings with overtime ', function() {
        ex.totalEarningsWithOvertime().should.equal(1487852768);
    });
});

describe('JSON Exercises - number of unique zip codes', function() {
    it('number of unique zip codes ', function() {
        ex.numberUniqueZipCodes().should.equal(494);
    });
});