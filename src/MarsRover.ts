import { Position } from "./Position";
import { Grid } from "./Grid";
import { Move } from "./Move";
import { MoveRight } from "./MoveRight";
import { MoveLeft } from "./MoveLeft";
import { Command } from "./Command";
import { Compass } from "./Compass";

export default class MarsRover {
  grid: Grid;
  position: Position;
  direction: string = Compass.NORTH;

  constructor(grid: Grid, position: Position, direction: string) {
    this.grid = grid;
    this.position = position;
    this.direction = direction;
  }

  run(commands: string) {
    for (let command of commands) {
      this.validateCommand(command);
      if (command === Command.MOVE) {
        new Move(this).move();
      }
      if (command === Command.LEFT) {
        new MoveLeft(this).move();
      }
      if (command === Command.RIGHT) {
        new MoveRight(this).move();
      }
    }

    return `${this.position.x} ${this.position.y} ${this.direction}`;
  }

  validateCommand(command: string) {
    const commands = [Command.MOVE, Command.LEFT, Command.RIGHT];
    for (let commandIn of commands) {
      if (commandIn === command) {
        return;
      }
    }
    throw Error("invalid command");
  }
}
