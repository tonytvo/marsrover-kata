import { FacingDirection, MarsRover } from "./MarsRover";
import { Coord } from "./Coord";
import { RoverState, RoverStateEast, RoverStateNorth, RoverStateSouth, RoverStateWest } from "./RoverStateWest";

export class MarsRoverFactory {
  static createMarsRoverFrom(position: Coord, facingDirection: FacingDirection) {
    const stateSupplierByDirection = new Map<FacingDirection, () => RoverState>([
      [FacingDirection.WEST, () => new RoverStateWest(position)],
      [FacingDirection.NORTH, () => new RoverStateNorth(position, facingDirection)],
      [FacingDirection.SOUTH, () => new RoverStateSouth(position)],
      [FacingDirection.EAST, () => new RoverStateEast(position)]
    ]);
    const stateSupplier = stateSupplierByDirection.get(facingDirection);
    if (stateSupplier === undefined) {
      throw new Error('unsupported facing direction')
    }
    return MarsRover.of(stateSupplier());
  }

  static createMarsRoverFromFacingDirection(facingDirection: FacingDirection) {
    return MarsRoverFactory.createMarsRoverFrom(new Coord(0, 0), facingDirection);
  }

  static createDefaultMarsRover() {
    let position = new Coord(0, 0);
    return new MarsRover(new RoverStateNorth(position, FacingDirection.NORTH));
  }
}