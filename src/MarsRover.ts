export default class MarsRover {
    grid: object
    position: string 
    direction: string = 'N'
  
    constructor(grid: object, position: string, direction: string ) {
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