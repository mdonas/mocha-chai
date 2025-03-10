import { expect } from "chai";
let items = [];

describe("Array Except Methods", function () {
  beforeEach(function () {
    items.push("John");
    items.push("Jane");
  });

  afterEach(function () {
    items = [];
  });

  it("should return number of array items", function () {
    expect(items).to.have.length(2);
  });

  it("should add a new value", function () {
    items.push("Joe");

    expect(items).to.have.length(3);
  });

  it("should return the first item", function () {
    expect(items.shift()).to.equal("John");
  });

  it("should return the last item", function () {
    expect(items.pop()).to.equal("Jane");
  });

  it("should find a value in the array", function () {
    expect(items.indexOf("John")).to.be.above(-1);
  });

  it("should not find a value in the array", function () {
    expect(items.indexOf("Fake")).to.not.be.above(-1);
  });

  it("should map to new values", function () {
    var mappedItems = items.map(function (val) {
      return val + " Doe";
    });

    mappedItems.forEach(function (val) {
      expect(val.indexOf(" Doe")).to.be.above(-1);
    });
  });

  it("should filter to one value", function () {
    var filteredItems = items.filter(function (val) {
      return val === "Jane";
    });

    expect(filteredItems[0]).to.equal("Jane");
  });

  it("should reduce to one string", function () {
    var reduced = items.reduce(function (allNames, name) {
      return allNames + ", " + name;
    });

    expect(reduced).to.equal("John, Jane");
  });
});
