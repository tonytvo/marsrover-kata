import { FacingDirection, MarsRover, Position } from "./MarsRover";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Position) {
    return MarsRover.of(position);
  }

  static createMarsRoverFromFacingDirection(facingDirection: FacingDirection) {
    return MarsRoverFactory.createMarsRoverFrom(new Position(0, 0, facingDirection));
  }


  static createDefaultMarsRover() {
    return new MarsRover();
  }
}