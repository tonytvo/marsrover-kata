import { Coord } from "./Coord";
import { FacingDirection } from "./MarsRover";

export interface RoverState {
  publishLocation(): string;

  turnLeft(): RoverState;

  turnRight(): RoverState;
}

export class RoverStateNorth implements RoverState {
  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;

  constructor(position: Coord, facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  publishLocation() {
    return `${this._position.toString()}:${this._facingDirection}`;
  }

  turnLeft() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.WEST);
  }

  turnRight() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
  }
}

export class RoverStateSouth implements RoverState {
  private readonly _position: Coord;

  constructor(position: Coord) {
    this._position = position;
  }

  publishLocation() {
    return `${this._position.toString()}:S`;
  }

  turnLeft() {
    return new RoverStateWest(new Coord(0, 0));
  }

  turnRight() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
  }
}

export class RoverStateWest implements RoverState {
  private readonly _position: Coord;

  constructor(position: Coord) {
    this._position = position;
  }

  publishLocation() {
    return `${this._position.toString()}:W`;
  }

  turnLeft() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.SOUTH);
  }

  turnRight() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.NORTH);
  }
}

export class RoverStateLegacy implements RoverState {
  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;

  constructor(position: Coord, facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  publishLocation() {
    return `${this._position.toString()}:${this._facingDirection}`;
  }

  turnLeft() {
    if (this._facingDirection === FacingDirection.SOUTH) {
      return new RoverStateWest(new Coord(0, 0));
    }

    if (this._facingDirection === FacingDirection.EAST) {
      return new RoverStateNorth(new Coord(0, 0), FacingDirection.NORTH);
    }

    throw new Error("should not get here");
  }

  turnRight() {
    if (this._facingDirection === FacingDirection.SOUTH) {
      return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
    }

    if (this._facingDirection === FacingDirection.EAST) {
      return new RoverStateNorth(new Coord(0, 0), FacingDirection.SOUTH);
    }

    return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
  }
}