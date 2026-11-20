const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true for a positive integer', () => {
    expect(validator.isInteger(10)).to.equal(true);
  });

  it('should return true for a negative integer', () => {
    expect(validator.isInteger(-5)).to.equal(true);
  });

  it('should return true for zero', () => {
    expect(validator.isInteger(0)).to.equal(true);
  });

  it('should return false for a decimal number', () => {
    expect(validator.isInteger(10.5)).to.equal(false);
  });

  it('should return false for a negative decimal number', () => {
    expect(validator.isInteger(-3.7)).to.equal(false);
  });

  it('should throw an error when argument is a string', () => {
    expect(() => validator.isInteger('10')).to.throw(Error);
  });

  it('should throw an error when argument is null', () => {
    expect(() => validator.isInteger(null)).to.throw(Error);
  });

  it('should throw an error when argument is undefined', () => {
    expect(() => validator.isInteger(undefined)).to.throw(Error);
  });
});
