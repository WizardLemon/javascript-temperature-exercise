import { expect } from "chai";
import fs from "fs";
import path from "path";

describe("Temperatures - Benchmark", () => {
  it("Performs performance benchmark between the team alghoritms", () => {
    const results = [...Array(15)].reduce((data, _, index) => {
      try {
        const file = fs.readFileSync(path.join(__dirname, `../benchmark/benchmark-${index + 1}.log`));
        const text = file
          .toString()
          .split("")
          .filter((c) => c.match(/[\x20-\x7E]/))
          .join("");

        const teamName = `team-${index + 1}`;
        const times = text.match(/\[(.*?)ms\]/gm);
        const bestTime = times.sort((a, b) => a.slice(1, -3) - b.slice(1, -3));
        const performance = bestTime[0].slice(1, -1);

        return { ...data, [teamName]: performance };
      } catch {
        return data;
      }
    }, {});

    console.log(results);
    expect(Object.keys(results).length).to.be.above(0);
  });
});
