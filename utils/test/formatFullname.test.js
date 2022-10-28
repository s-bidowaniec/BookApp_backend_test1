const formatFullname = require('../formatFullname')
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "content" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });
    it('should return error if "content" arg dos not match "firstname lastname" format', () => {
        expect(formatFullname("John")).to.equal('Error');
        expect(formatFullname("John Doe Senior")).to.equal('Error');
    })
    it('should return proper name string', () => {
        expect(formatFullname("jOHn dOE")).to.equal('John Doe');
        expect(formatFullname("JOHN DOE")).to.equal('John Doe');
        expect(formatFullname("JOHN doE")).to.equal('John Doe');
        expect(formatFullname("john doe")).to.equal('John Doe');
    })
})