import {Position} from "./Position";

export class Grid {
  private position: Position = new Position()

  constructor(x: number, y: number) {
    this.position.y = y
    this.position.x = x
  }

  get x(): number {
    return this.position.x
  }

  get y(): number {
    return this.position.y
  }

}
