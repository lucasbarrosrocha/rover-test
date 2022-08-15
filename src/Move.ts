import MarsRover from "./MarsRover";
import { Compass } from "./Compass";
import { Position } from "./Position";

export class Move {
  private rover: MarsRover;

  constructor(rover: MarsRover) {
    this.rover = rover;
  }

  move() {
    let currentX = this.rover.position.x;
    let currentY = this.rover.position.y;

    if (this.rover.direction === Compass.NORTH) {
      currentY++;
    }
    if (this.rover.direction === Compass.EAST) {
      currentX++;
    }
    if (this.rover.direction === Compass.SOUTH) {
      currentY--;
    }
    if (this.rover.direction === Compass.WEST) {
      currentX--;
    }

    const { x, y } = this.nextPosition(currentX, currentY);
    this.rover.position = new Position(x, y);
  }

  private nextPosition(x: number, y: number): Position {
    if (y > this.rover.grid.y - 1) {
      y = 0;
    }

    if (y < 0) {
      y = this.rover.grid.y - 1;
    }

    if (x < 0) {
      x = this.rover.grid.x - 1;
    }

    if (x > this.rover.grid.x - 1) {
      x = 0;
    }

    return { x, y };
  }
}
