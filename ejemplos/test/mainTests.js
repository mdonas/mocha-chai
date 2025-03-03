// import assert from 'assert';
import * as main from "../../first.js";
import { expect, assert, should } from "chai";

//Results
const helloWorldText = main.helloWorld();
const subtractionResult = main.substraction(5, 1);
const arrayOfNumbersResult = main.arrayOfNumbers();

describe("Main Test", function () {
  describe("Hello World Funcion -  Test Case", function () {
    it.only("Hello World text is as expected", function () {
      assert.equal(helloWorldText, "hello world");
    });
    it("Validate data type", function () {
      // assert.strictEqual(typeof helloWorldText, "string");
      assert.typeOf(helloWorldText, "string");
      // expect(typeof helloWorldText).to.be.a('string')
    });
  });
  describe("Subtraction -  Test Case", function () {
    it("Subtraction result as expected", function () {
      assert.isBelow(subtractionResult, 5);
    });
    it("Validate data type", function () {
      // assert.strictEqual(typeof subtractionResult, 'number', 'The expected data type is a int')
      // expect(subtractionResult).to.be.a('number')
      // expect(subtractionResult).to.be.a('number')
      // expect.subtractionResult.to.be.a('number')
    });
  });
  describe("Array -  Test Case", function () {
    it("Array include 5", function () {
      // assert.include(arrayOfNumbersResult, 5)
      // expect(arrayOfNumbersResult).to.include(5);
      should(arrayOfNumbersResult.includes(5));
    });
    it("Validate data type", function () {
      // assert.strictEqual(typeof subtractionResult, 'number', 'The expected data type is a int')
      expect(subtractionResult).to.be.a("number");
    });
  });
});
