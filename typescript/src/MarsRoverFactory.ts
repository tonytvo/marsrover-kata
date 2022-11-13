import {
  Coord,
  FacingDirection,
  MarsRover,
  RoverState,
  RoverStateLegacy,
  RoverStateNorth,
  RoverStateWest
} from "./MarsRover";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Coord, facingDirection: FacingDirection) {
    let roverState: RoverState = new RoverStateLegacy(position, facingDirection);
    if (facingDirection === FacingDirection.WEST) {
      roverState = new RoverStateWest(position);
    } else if (facingDirection === FacingDirection.NORTH) {
      roverState = new RoverStateNorth(position, facingDirection);
    }

    return MarsRover.of(roverState);
  }

  static createMarsRoverFromFacingDirection(facingDirection: FacingDirection) {
    return MarsRoverFactory.createMarsRoverFrom(new Coord(0, 0), facingDirection);
  }

  static createDefaultMarsRover() {
    let position = new Coord(0, 0);
    return new MarsRover(new RoverStateNorth(position, FacingDirection.NORTH));
  }
}