const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided an even number', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it('should return false when provided an odd number', () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it('should return true for zero', () => {
    expect(validator.isNumberEven(0)).to.be.equal(true);
  });
  it('should throw an error when argument is not a number', () => {
    expect(() => validator.isNumberEven('4')).to.throw(Error);
  });
});
