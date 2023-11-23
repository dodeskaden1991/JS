//const expect = require("chai").expect;
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const another = require('./_another.js');

describe("sum function", function () {
    it("da subera 2 4isla", function () {
        const number_one = 2;
        const number_two = 3;
        const result = another.sum (number_one, number_two);
        expect(result).to.be.equal(5);
    });
    it("da subera 2 stringa", function () {
        expect(another.sum ("2","3")).to.be.equal(5);
    });
    it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
        expect([1, 2, 3].indexOf(4)).to.equal(-1);
        [1, 2, 3].indexOf(4).should.equal(-1);
        });
        it('da subera 2 4isla v2', function () {
            const number_one = 8;
            const number_two = 4;
            const result_sum = another.sum (number_one, number_two);
            const result_multiply = another.multiply (number_one, number_two);
            const result_Divination = another.Divination (number_one, number_two);

            assert.equal(result_sum, 12);
            expect(result_multiply).to.equal(32);
            result_Divination.should.equal(3);
            });
});
