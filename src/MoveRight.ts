import MarsRover from "./MarsRover";
import { Compass } from "./Compass";

export class MoveRight {
  private rover: MarsRover;

  constructor(rover: MarsRover) {
    this.rover = rover;
  }

  move() {
    if (this.rover.direction === Compass.EAST) {
      this.rover.direction = Compass.SOUTH;
      return;
    }
    if (this.rover.direction === Compass.NORTH) {
      this.rover.direction = Compass.EAST;
      return;
    }
    if (this.rover.direction === Compass.SOUTH) {
      this.rover.direction = Compass.WEST;
      return;
    }
    if (this.rover.direction === Compass.WEST) {
      this.rover.direction = Compass.NORTH;
      return;
    }
  }
}
