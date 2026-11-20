const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when all array elements are numbers', () => {
    expect(validator.isAllNumbers([1, 2, 3, 4])).to.equal(true);
  });

  it('should return false when array contains a string', () => {
    expect(validator.isAllNumbers([1, '2', 3])).to.equal(false);
  });

  it('should return false when array contains null', () => {
    expect(validator.isAllNumbers([1, null, 3])).to.equal(false);
  });

  it('should return false when array contains undefined', () => {
    expect(validator.isAllNumbers([1, undefined, 3])).to.equal(false);
  });

  it('should return true for an empty array', () => {
    expect(validator.isAllNumbers([])).to.equal(true);
  });

  it('should throw an error when argument is not an array', () => {
    expect(() => validator.isAllNumbers(123)).to.throw(Error);
  });

  it('should throw an error when argument is a string', () => {
    expect(() => validator.isAllNumbers('123')).to.throw(Error);
  });
});
