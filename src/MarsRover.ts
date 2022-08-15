export default class MarsRover {
    grid: object
    position: string 
    direction: string = 'N'
  
    constructor(grid: object, position: string, direction: string ) {
      this.grid = grid
      this.position = position
      this.direction = direction
    }
  
   }