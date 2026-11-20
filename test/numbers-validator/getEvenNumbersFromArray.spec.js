const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return only even numbers', () => {
    expect(validator.getEvenNumbersFromArray([1, 2, 3, 4])).to.deep.equal([2, 4]);
  });

  it('should return an empty array when there are no even numbers', () => {
    expect(validator.getEvenNumbersFromArray([1, 3, 5])).to.deep.equal([]);
  });

  it('should return an empty array for an empty array', () => {
    expect(validator.getEvenNumbersFromArray([])).to.deep.equal([]);
  });

  it('should throw an error when argument is not an array', () => {
    expect(() => validator.getEvenNumbersFromArray(123)).to.throw(Error);
  });

  it('should throw an error when array contains non-numerical values', () => {
    expect(() => validator.getEvenNumbersFromArray([1, '2', 4])).to.throw(Error);
  });
});
