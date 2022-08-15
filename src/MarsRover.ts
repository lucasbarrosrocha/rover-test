import { Position } from "./Position";
import { Grid } from "./Grid";
import { Move } from "./Move";
import { MoveRight } from "./MoveRight";
import { MoveLeft } from "./MoveLeft";
export default class MarsRover {
  grid: Grid;
  position: Position;
  direction: string = "N";

  constructor(grid: Grid, position: Position, direction: string) {
    this.grid = grid;
    this.position = position;
    this.direction = direction;
  }

  run(commands: string) {
    for (let command of commands) {
      this.validateCommand(command);
      if (command === "M") {
        new Move(this).move();
      }
      if (command === "L") {
        new MoveLeft(this).move();
      }
      if (command === "R") {
        new MoveRight(this).move();
      }
    }

    return `${this.position.x}:${this.position.y}:${this.direction}`;
  }

  validateCommand(command: string) {
    const commands = ["M", "L", "R"];
    for (let commandIn of commands) {
      if (commandIn === command) {
        return;
      }
    }
    throw Error("invalid command");
  }
}
