import MarsRover from './MarsRover';

export class MoveLeft {
  private rover: MarsRover;

  constructor(rover: MarsRover) {
    this.rover = rover
  }

  move() {
    if (this.rover.direction === 'W') {
      this.rover.direction = 'S'
      return
    }
    if (this.rover.direction === 'N') {
      this.rover.direction = 'W'
      return
    }
    if (this.rover.direction === 'E') {
      this.rover.direction = 'N'
      return
    }
    if (this.rover.direction === 'S') {
      this.rover.direction = 'E'
      return
    }
  }
}