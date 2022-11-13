import { Coord, FacingDirection, MarsRover, RoverStateNorth } from "./MarsRover";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Coord, facingDirection: FacingDirection) {
    return MarsRover.of(position, facingDirection, new RoverStateNorth(position, facingDirection));
  }

  static createMarsRoverFromFacingDirection(facingDirection: FacingDirection) {
    return MarsRoverFactory.createMarsRoverFrom(new Coord(0, 0), facingDirection);
  }

  static createDefaultMarsRover() {
    let position = new Coord(0, 0);
    return new MarsRover(position, FacingDirection.NORTH, new RoverStateNorth(position, FacingDirection.NORTH));
  }
}