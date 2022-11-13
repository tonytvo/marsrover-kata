import { Coord, FacingDirection, MarsRover, RoverState, RoverStateNorth, RoverStateWest } from "./MarsRover";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Coord, facingDirection: FacingDirection) {
    let roverState: RoverState = new RoverStateNorth(position, facingDirection);
    if (facingDirection === FacingDirection.WEST) {
      roverState = new RoverStateWest(position, facingDirection);
    }

    return MarsRover.of(position, facingDirection, roverState);
  }

  static createMarsRoverFromFacingDirection(facingDirection: FacingDirection) {
    return MarsRoverFactory.createMarsRoverFrom(new Coord(0, 0), facingDirection);
  }

  static createDefaultMarsRover() {
    let position = new Coord(0, 0);
    return new MarsRover(position, FacingDirection.NORTH, new RoverStateNorth(position, FacingDirection.NORTH));
  }
}