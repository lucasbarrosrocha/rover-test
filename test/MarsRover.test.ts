import MarsRover from "../src/MarsRover";
import { Grid } from "../src/Grid";
import { Position } from "../src/Position";

describe("Mars rover", () => {
  test.each([
    [{ command: "M", expectedPosition: "0 1 N" }],
    [{ command: "L", expectedPosition: "0 0 W" }],
    [{ command: "LL", expectedPosition: "0 0 S" }],
    [{ command: "RM", expectedPosition: "1 0 E" }],
    [{ command: "MRRM", expectedPosition: "0 0 S" }],
    [{ command: "RL", expectedPosition: "0 0 N" }],
    [{ command: "RRM", expectedPosition: "0 9 S" }],
    [{ command: "RRRR", expectedPosition: "0 0 N" }],
    [{ command: "MMMMMMMMMM", expectedPosition: "0 0 N" }],
  ])("move mars rover based on %s", ({ command, expectedPosition }) => {
    const rover = new MarsRover(new Grid(10, 10), new Position(0,0), "N");
    expect(rover.run(command)).toEqual(expectedPosition);
  });

  test.each([
    [{ command: "LMLMLMLMM", expectedPosition: "1 3 N" }],
  ])("test 1", ({ command, expectedPosition }) => {
    const rover = new MarsRover(new Grid(5, 5), new Position(1,2), "N");
    expect(rover.run(command)).toEqual(expectedPosition);
  });

  test.each([
    [{ command: "MMRMMRMRRM", expectedPosition: "0 1 E" }],
  ])("test 2", ({ command, expectedPosition }) => {
    const rover = new MarsRover(new Grid(5, 5), new Position(3,3), "E");
    expect(rover.run(command)).toEqual(expectedPosition);
  });
});
