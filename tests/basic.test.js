import { expect } from "chai";
import temperatures from "../src";

describe("Temperatures - Basic functionality", () => {
  it("Should return closest integer to zero", () => {
    const testInput = [1, -2, -8, 4, 5];
    const expectedResult = 1;
    expect(temperatures(testInput)).to.equal(expectedResult, JSON.stringify(testInput));
  });

  it("Should return closest integer to zero #2", () => {
    const testInput = [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5];
    const expectedResult = 2;
    expect(temperatures(testInput)).to.equal(expectedResult, JSON.stringify(testInput));
  });

  it("Should work with exclusively negative numbers", () => {
    const testInput = [-12, -5, -137];
    const expectedResult = -5;
    expect(temperatures(testInput)).to.equal(expectedResult, JSON.stringify(testInput));
  });

  it("Should return positive integer if two are equally distant from zero #1", () => {
    const testInput = [42, -5, 12, 21, 5, 24];
    const expectedResult = 5;
    expect(temperatures(testInput)).to.equal(expectedResult, JSON.stringify(testInput));
  });

  it("Should return positive integer if two are equally distant from zero #2", () => {
    const testInput = [42, 5, 12, 21, -5, 24];
    const expectedResult = 5;
    expect(temperatures(testInput)).to.equal(expectedResult, JSON.stringify(testInput));
  });

  it("Should return explicit 0 for an empty input", () => {
    const testInput = [];
    const expectedResult = 0;
    expect(temperatures(testInput)).to.equal(expectedResult, "[]");
  });
});
