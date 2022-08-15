import { Position } from "./Position"

export default class MarsRover {
    grid: object
    position: Position 
    direction: string = 'N'
  
    constructor(grid: object, position: Position, direction: string ) {
      this.grid = grid
      this.position = position
      this.direction = direction
    }

    validateCommand(command: string) {
        const commands = ['M', 'L', 'R']
        for (let commandIn of commands) {
          if (commandIn === command) {
            return
          }
        }
        throw Error('invalid command')
      }
  
   }