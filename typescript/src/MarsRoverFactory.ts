import { MarsRover, Position } from "./MarsRover";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Position) {
    return MarsRover.of(position);
  }

  static createDefaultMarsRover() {
    return new MarsRover();
  }
}