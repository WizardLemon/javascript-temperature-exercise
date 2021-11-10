import { expect } from "chai";
import temperatures from "../src";

describe("Temperatures - Functional", () => {
  it("Should not mutate input array", () => {
    const testInput = Object.freeze([1, -2, -8, 4, 5]);
    const expectedResult = 1;
    expect(temperatures(testInput)).to.equal(expectedResult, `Object.freeze(${JSON.stringify(testInput)})`);
  });
});
