import { FacingDirection, MarsRover, Position } from "./MarsRover";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Position, facingDirection: FacingDirection) {
    return MarsRover.of(position, facingDirection);
  }

  static createMarsRoverFromFacingDirection(facingDirection: FacingDirection) {
    return MarsRoverFactory.createMarsRoverFrom(new Position(0, 0, facingDirection), facingDirection);
  }

  static createDefaultMarsRover() {
    let position = new Position(0, 0, FacingDirection.NORTH);
    return new MarsRover(position, FacingDirection.NORTH);
  }
}