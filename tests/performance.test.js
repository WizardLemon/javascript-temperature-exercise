import { expect } from "chai";
import { performance } from "perf_hooks";
import temperatures from "../src";

describe("Temperatures - Performance", function () {
  const TIME_LIMIT = 500;
  this.slow(TIME_LIMIT / 2);

  let testInput;
  before(() => {
    testInput = [...Array(10 ** 6)].map(() => Math.ceil(Math.random() * 100));
  });

  Array(5).fill(null).forEach(() => {
    it(`Should not exceed more than ${TIME_LIMIT}ms for 1M inputs`, () => {
      const start = performance.now();
      temperatures(testInput);
      const stop = performance.now();
      const elapsed = stop - start;
      console.log(`[${Math.round(elapsed)}ms]`);
      expect(elapsed).to.be.below(TIME_LIMIT);
    });
  });
});
